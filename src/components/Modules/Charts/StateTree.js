import React from 'react';
import * as go from 'gojs';
import { useTheme } from "../../Matlib";
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
                }
        }

        let myDiagram =
                $(go.Diagram, "stateTreeRoot",
                        {
                                initialContentAlignment: go.Spot.TopCenter,
                                // have mouse wheel events zoom in and out instead of scroll up and down
                                "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
                                initialAutoScale: go.Diagram.Uniform,
                                "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                                layout: $(go.LayeredDigraphLayout, { isInitial: false, isOngoing: false, layerSpacing: 50 }),
                                "undoManager.isEnabled": true
                        });

        // define the Node template
        myDiagram.nodeTemplate =
                $(go.Node, "Auto",
                        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                        // define the node's outer shape, which will surround the TextBlock
                        $(go.Shape, "RoundedRectangle",
                                {
                                        fill: theme.background[20], stroke: theme.text[70], strokeWidth: 1,
                                        portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer",
                                        toEndSegmentLength: 50, fromEndSegmentLength: 40
                                }),
                        $(go.TextBlock, "Page",
                                textStyle(),
                                new go.Binding("text", "text").makeTwoWay()));


        // replace the default Link template in the linkTemplateMap
        myDiagram.linkTemplate =
                $(go.Link,  // the whole link panel
                        { routing: go.Link.Normal },
                        new go.Binding("points").makeTwoWay(),
                        { curve: go.Link.Bezier, toShortLength: 5 },
                        new go.Binding("curviness", "curviness"),
                        $(go.Shape,  // the link shape
                                { strokeWidth: 1 },
                                new go.Binding('stroke', 'impacted', function (impacted) {
                                        return impacted ? "#CA3112" : theme.text[50];
                                }),
                        ),
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
                );

        return myDiagram;
}

export const StateTreeComponent = () => {
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
                        "copiesArrays": true,
                        "copiesArrayObjects": true,
                        "nodeDataArray": [
                                { "key": 0, "text": "#Master" },
                                { "key": 1, "text": "#AppHeader" },
                                { "key": 2, "text": "#AppDrawer" },
                                { "key": 3, "text": "#ThemeToggler" },
                                { "key": 4, "text": "#DestopToolbar" },
                                { "key": 5, "text": "#DrawerSections" },
                        ],
                        "linkDataArray": [
                                { "from": 0, "to": 0, "impacted": true },
                                { "from": 2, "to": 2, "impacted": true },
                                { "from": 5, "to": 2, "impacted": true },
                                { "from": 1, "to": 0, "impacted": true },

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
                <div id="stateTreeRoot" className={styl.root}></div>
        )
}