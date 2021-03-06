import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Config from '../config';
import { CommonStyles, DrawerPanelStyles, StyleConfig } from '../style';

const listIconSize = 18;

const listItems = [{
	name:'设置',
	icon:'ios-cog',
	page:'toSetting'
},{
	name:'关于',
	icon:'ios-navigate-outline',
	page:'toAbout'
},{
	name:'意见反馈',
	icon:'ios-chatbubbles-outline',
	page:'toFeedback'
}]

class DrawerPanel extends Component {

	renderPage(item){
		let { router, hideDrawerFunc } = this.props;
		hideDrawerFunc && hideDrawerFunc();
		router && router[item.page]();
	}

	renderHeader(){
		let { router } = this.props;
		return (
			<View style={ DrawerPanelStyles.header }>
				<Image 
					style={ DrawerPanelStyles.headerBg }
					source={{ uri:'http://123.56.135.166/cnblog/public/img/drawerbg-1.jpg'}}>
					<Text style={ DrawerPanelStyles.headerTitle }>
						{ Config.appInfo.name }
					</Text>
					<Text style={ DrawerPanelStyles.headerHint }>
						{ Config.appInfo.descr }
					</Text>
				</Image>
			</View>
		)
	}

	renderContentItem(item, index){
		return (
			<TouchableHighlight key={ index }
				onPress={ this.renderPage.bind(this, item)}
				underlayColor={ StyleConfig.touchablePressColor }>
				<View style={ [CommonStyles.listItem, DrawerPanelStyles.listItem] }>
					<Icon name={ item.icon }
						size={ listIconSize }
						style={ CommonStyles.listItemIcon }
					/>
					<Text style={ CommonStyles.listItemText }>
						{ item.name }
					</Text>
				</View>
			</TouchableHighlight>
		);
	}

	renderContent(){
		
		return (
			<View style={ DrawerPanelStyles.list }>
				{
					listItems && listItems.map((item, index)=>
						this.renderContentItem(item, index)
					)
				}
			</View>
		)
	}
	
	render() {
		return (
			<View style={ [CommonStyles.container, DrawerPanelStyles.container] }>
				{ this.renderHeader() }
				{ this.renderContent() }
			</View>
		)
	}
}


export default DrawerPanel;


