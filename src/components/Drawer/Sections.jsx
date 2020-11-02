import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { onSectionClick } from '../actions/Drawer'; //actions
import { List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader } from '../Matlib'; // toolkits
// styles 
import { Styles } from "../../styles/AppDrawer";

const Component = ({
      props,
      actions
}) => {
      const styl = Styles();

      return (
            <React.Fragment>
                  <div className={styl.drawerBody}>
                        <List subheader={
                              <ListSubheader component="div" className={styl.sectionTextHeader} >
                                    Trees
                              </ListSubheader>
                        }>
                              {
                                    props.section1.map((text, index) => {
                                          const MappedIcons = props.iconSvgMappings[text];
                                          return (
                                                <ListItem
                                                      button
                                                      className={`${styl.listItem} ${props.activeSection === text + " rootz" && styl.activeSection}`}
                                                      onClick={() => actions.onSectionClick(text + " rootz", props.history)}
                                                >
                                                      {/* <ListItemIcon className={styl.icons}>
                                                            <MappedIcons className={styl.iconSvg} />
                                                      </ListItemIcon> */}
                                                      <ListItemText primary={text} className={styl.sectionText} />
                                                </ListItem>
                                          )
                                    })
                              }
                        </List>
                        <Divider className={styl.dividerMain} />
                        <List subheader={
                              <ListSubheader component="div" className={styl.sectionTextHeader} >
                                    Diffs
                              </ListSubheader>
                        }>
                              {
                                    props.section2.map((text, index) => {
                                          const MappedIcons = props.iconSvgMappings2[text];
                                          return (
                                                <ListItem
                                                      button
                                                      className={`${styl.listItem} ${props.activeSection === text + " differenz" && styl.activeSection}`}
                                                      onClick={() => actions.onSectionClick(text + " differenz", props.history)}
                                                >
                                                      {/* <ListItemIcon className={styl.icons}>
                                                            <MappedIcons className={styl.iconSvg} />
                                                      </ListItemIcon> */}
                                                      <ListItemText primary={text} className={styl.sectionText} />
                                                </ListItem>
                                          )
                                    })
                              }
                        </List>
                  </div>
                  <div className={styl.drawerFooter}>

                  </div>
            </React.Fragment>
      )
}

const selfActions = [];
const nodeActions = [onSectionClick];
const actions = [selfActions, nodeActions];

export const DrawerSections = createLeaf({
      actions,
      Component,
      id: "#DrawerSections",
      nodeId: "#AppDrawer",
})