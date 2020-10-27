import React from 'react';
import * as go from 'gojs';
import { useTheme } from "../../Matlib";
import { Styles } from '../styles/charts';

const init = theme => {
        let $ = go.GraphObject.make;  // for conciseness in defining templates

        let bigfont = '13px Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

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
                $(go.Diagram, "domTreeRoot",
                        {
                                initialContentAlignment: go.Spot.TopCenter,
                                // have mouse wheel events zoom in and out instead of scroll up and down
                                "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
                                initialAutoScale: go.Diagram.Uniform,
                                "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                                layout: $(go.TreeLayout, { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.ArrangementFixedRoots }),
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
                        new go.Binding("points").makeTwoWay(),
                        { curve: go.Link.Bezier, toShortLength: 5 },
                        new go.Binding("curviness", "curviness"),
                        $(go.Shape,  // the link shape
                                { stroke: theme.text[50], strokeWidth: 1 }),
                        $(go.Shape,  // the arrowhead
                                { toArrow: "circle", fill: theme.text[50], stroke: null, scale: 0.75 })
                );

        return myDiagram;
}

export const DomTreeComponent = () => {
        const styl = Styles();
        const theme = useTheme();

        React.useEffect(() => {
                const diagram = init(theme);
                diagram.model = go.Model.fromJson({
                        "class": "go.GraphLinksModel",
                        "copiesArrays": true,
                        "copiesArrayObjects": true,
                        "nodeDataArray": [
                                { "key": 0, "text": "#Master" },
                                { "key": 1, "text": "#AppHeader" },
                                { "key": 2, "text": "#AppDrawer" },
                                { "key": 3, "text": "#ThemeToggler" },
                                { "key": 5, "text": "#DestopToolbar" },
                                { "key": 6, "text": "#DrawerSections" },
                        ],
                        "linkDataArray": [
                                { "from": 0, "to": 1 },
                                { "from": 0, "to": 2 },
                                { "from": 1, "to": 3 },
                                { "from": 1, "to": 5 },
                                { "from": 2, "to": 6 },
                        ]
                });
                diagram.layoutDiagram(true);
        }, []);

        return (
                <div id="domTreeRoot" className={styl.root}></div>
        )
}