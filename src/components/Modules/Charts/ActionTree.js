import React from 'react';
import * as go from 'gojs';
import { fade, useTheme } from "../../Matlib";
import CurvedLinkReshapingTool from './CurvedLink';
import { Styles } from '../styles/charts';

// define a custom ForceDirectedLayout for this sample
function DemoForceDirectedLayout() {
        go.ForceDirectedLayout.call(this);
}
go.Diagram.inherit(DemoForceDirectedLayout, go.ForceDirectedLayout);

// Override the makeNetwork method to also initialize
// ForceDirectedVertex.isFixed from the corresponding Node.isSelected.
DemoForceDirectedLayout.prototype.makeNetwork = function (coll) {
        // call base method for standard behavior
        var net = go.ForceDirectedLayout.prototype.makeNetwork.call(this, coll);
        net.vertexes.each(function (vertex) {
                var node = vertex.node;
                if (node !== null) vertex.isFixed = node.isSelected;
        });
        return net;
};


const init = theme => {
        let $ = go.GraphObject.make;  // for conciseness in defining templates

        let bigfont = '15px Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

        // Common text styling
        function textStyle() {
                return {
                        margin: 7,
                        font: bigfont,
                        editable: false,
                        textAlign: "center",
                        stroke: theme.text["00"],
                        wrap: go.TextBlock.WrapFit,
                        cursor: "pointer"
                }
        }

        let myDiagram =
                $(go.Diagram, "actionTreeRoot",
                        {
                                initialContentAlignment: go.Spot.TopCenter,
                                // have mouse wheel events zoom in and out instead of scroll up and down
                                "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
                                initialAutoScale: go.Diagram.Uniform,
                                "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                                "linkReshapingTool": new CurvedLinkReshapingTool(),
                                layout: $(go.ForceDirectedLayout, { arrangementSpacing: new go.Size(500, 200), arrangesToOrigin: true }),
                                "undoManager.isEnabled": true
                        });

        // define the Node template
        myDiagram.nodeTemplate =
                $(go.Node, "Auto",
                        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
                        // define the node's outer shape, which will surround the TextBlock
                        $(go.Shape, "RoundedRectangle",
                                {
                                        fill: theme.background[20], stroke: theme.text[70], strokeWidth: 1,
                                        portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
                                        toEndSegmentLength: 50, fromEndSegmentLength: 50
                                }),
                        $(go.TextBlock, "Page",
                                textStyle(),
                                new go.Binding("text", "text").makeTwoWay())
                );


        // replace the default Link template in the linkTemplateMap
        myDiagram.linkTemplate =
                $(go.Link,  // the whole link panel
                        {
                                reshapable: true, 
                                toShortLength: 60,
                                relinkableTo: true,
                                relinkableFrom: true, 
                                curve: go.Link.Bezier,
                                routing: go.Link.Normal,
                                adjusting: go.Link.TableColumn,
                        },
                        new go.Binding("points").makeTwoWay(),
                        { curve: go.Link.Bezier, toShortLength: 5 },
                        new go.Binding("curviness", "curviness"),
                        $(go.Shape,  // the link shape
                                { strokeWidth: 1 },
                                new go.Binding('stroke', 'impacted', function (impacted) {
                                        return impacted ? "#CA3112" : theme.text[50];
                                })),
                        $(go.Shape,  // the arrowhead
                                { stroke: null },
                                new go.Binding('fill', 'impacted', function (impacted) {
                                        return impacted ? "#CA3112" : theme.text[50];
                                }),
                                new go.Binding('toArrow', 'impacted', function (impacted) {
                                        return impacted ? "standard" : "circle";
                                }),
                                new go.Binding('scale', 'impacted', function (impacted) {
                                        return impacted ? 1.25 : 0.75;
                                })),
                        $(go.Panel, "Auto",
                                $(go.Shape, "RoundedRectangle",  // the label background, which becomes transparent around the edges
                                        {
                                                fill: "#cad6e2",
                                                stroke: theme.palette.secondary.main,
                                        },
                                        new go.Binding('visible', 'impacted', function (impacted) {
                                                return Boolean(impacted);
                                        })),
                                $(go.TextBlock, "transition",  // the label text
                                        {
                                                margin: 5,
                                                font: bigfont,
                                                editable: false,
                                                textAlign: "center",
                                                stroke: theme.text["00"],
                                                wrap: go.TextBlock.FlipVertical,
                                        },
                                        new go.Binding('visible', 'impacted', function (impacted) {
                                                return Boolean(impacted);
                                        }),
                                        // editing the text automatically updates the model data
                                        new go.Binding("text").makeTwoWay())
                        ),
                        new go.Binding("segmentOffset", "segmentOffset", go.Point.parse).makeTwoWay(go.Point.stringify)
                );

        return myDiagram;
}

export const ActionTreeComponent = () => {
        const styl = Styles();
        const theme = useTheme();

        React.useEffect(() => {
                const diagram = init(theme);
                diagram.animationManager.initialAnimationStyle = go.AnimationManager.None;
                diagram.nodeSelectionAdornmentTemplate = false;
                diagram.linkSelectionAdornmentTemplate = false;
                diagram.groupSelectionAdornmentTemplate = false;
                diagram.model = go.Model.fromJson({
                        "class": "go.GraphLinksModel",
                        "nodeDataArray": [
                                { "key": 0, "text": "#Master" },
                                { "key": 1, "text": "#AppHeader" },
                                { "key": 2, "text": "#AppDrawer" },
                                { "key": 3, "text": "#ThemeToggler" },
                                { "key": 4, "text": "#DestopToolbar" },
                                { "key": 5, "text": "#DrawerSections" },
                        ],
                        "linkDataArray": [
                                { "text": "onErrorOccured", "from": 0, "to": 0, "impacted": true },
                                { "text": "onMenuOpen", "from": 2, "to": 2, "impacted": true },
                                { "text": "onMenuClose", "from": 2, "to": 2, "impacted": true },
                                { "text": "onSectionClick", "from": 5, "to": 2, "impacted": true },
                                { "text": "onThemeChange", "from": 1, "to": 0, "impacted": true },

                                { "from": 0, "to": 1, "impacted": false },
                                { "from": 0, "to": 2, "impacted": false },
                                { "from": 1, "to": 3, "impacted": false },
                                { "from": 1, "to": 4, "impacted": false },
                                { "from": 2, "to": 5, "impacted": false },
                        ]
                });
                diagram.layoutDiagram(true);
        }, []);

        return (
                <div id="actionTreeRoot" className={styl.root}></div>
        )
}