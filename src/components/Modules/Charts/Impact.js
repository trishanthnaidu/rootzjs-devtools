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
                        stroke: theme.text[50],
                        wrap: go.TextBlock.WrapFit,
                }
        }

        let myDiagram =
                $(go.Diagram, "impactTreeRoot",
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
                                        strokeWidth: 1, portId: "", fromLinkable: true, toLinkable: true,
                                        cursor: "pointer", toEndSegmentLength: 50, fromEndSegmentLength: 40
                                },
                                new go.Binding('stroke', 'impacted', function (impacted) {
                                        return impacted ? theme.palette.primary.main : theme.text[70];
                                }),
                                new go.Binding('fill', 'impacted', function (impacted) {
                                        return impacted ? "#663838" : theme.background[20];
                                }),
                        ),
                        $(go.TextBlock, "Page",
                                textStyle(),
                                new go.Binding("text", "text").makeTwoWay(),
                                new go.Binding('stroke', 'impacted', function (impacted) {
                                        return impacted ? theme.text[10] : theme.text[50];
                                })));


        // replace the default Link template in the linkTemplateMap
        myDiagram.linkTemplate =
                $(go.Link,  // the whole link panel
                        new go.Binding("points").makeTwoWay(),
                        { curve: go.Link.Bezier, toShortLength: 5 },
                        new go.Binding("curviness", "curviness"),
                        $(go.Shape,  // the link shape
                                { strokeWidth: 1 },
                                new go.Binding('stroke', 'impacted', function (impacted) {
                                        return impacted ? theme.palette.primary.main : theme.text[50];
                                }),
                        ),
                        $(go.Shape,  // the arrowhead
                                { toArrow: "circle", stroke: null, scale: 0.75 },
                                new go.Binding('fill', 'impacted', function (impacted) {
                                        return impacted ? theme.palette.primary.main : theme.text[50];
                                })),
                );

        return myDiagram;
}

export const ImpactTreeComponent = () => {
        const styl = Styles();
        const theme = useTheme();

        React.useEffect(() => {
                const diagram = init(theme);
                diagram.animationManager.initialAnimationStyle = go.AnimationManager.None;
                diagram.model = go.Model.fromJson({
                        "class": "go.GraphLinksModel",
                        "copiesArrays": true,
                        "copiesArrayObjects": true,
                        "nodeDataArray": [
                                { "key": 0, "text": "#Master", "impacted": false },
                                { "key": 1, "text": "#AppHeader", "impacted": false },
                                { "key": 2, "text": "#AppDrawer", "impacted": true },
                                { "key": 3, "text": "#ThemeToggler", "impacted": false },
                                { "key": 4, "text": "#DestopToolbar", "impacted": false },
                                { "key": 5, "text": "#DrawerSections", "impacted": true },
                        ],
                        "linkDataArray": [
                                { "from": 0, "to": 1, "impacted": false },
                                { "from": 0, "to": 2, "impacted": false },
                                { "from": 1, "to": 3, "impacted": false },
                                { "from": 1, "to": 4, "impacted": false },
                                { "from": 2, "to": 5, "impacted": true },
                        ]
                });
                diagram.layoutDiagram(true);
        }, []);

        return (
                <div id="impactTreeRoot" className={styl.root}></div>
        )
}