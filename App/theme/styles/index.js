import { StyleSheet, Dimensions } from "react-native";


//MAIN COLOR CONST VALUES
const PRIMART_COLOR='#7444C0';
const SECONDART_COLOR='#5636B8';
const WHITE='#FFFFFF';
const GRAY='#757E90';
const DARK_GRAY='#363636';
const BLACK='#000000';

// ONLINE && OFFLINE CONSTS
const ONLINE_STATUS='#46A575';
const OFFLINE_STATUS='#D04949';

//ACTION MODIFIERS AND COLORS
const STAR_ACTIONS='#FFA200';
const LIKE_ACTIONS='#B644B2';
const DISLIKE_ACTIONS='#363636';
const FLASH_ACTIONS='#5028D7';

//FONTS AND ACTIONS
const ICON_FONT = "datingappFont";

//GETTING WIDTH AND HEIGH OF SCREENS
const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT=Dimensions.get('window').height;


export default StyleSheet.create({
/*============STYLE MODULES==================*/
// COMPONENT - CARD ITEM
    ContainerCardItem:{
        backgroundColor:WHITE,
        borderRadius:8,
        alignItems:'center',
        margin:'center',
        shadowOpacity:0.05,
        shadowRadius:10,
        shadowColor:BLACK,
        shadowOffset:{height:0, width:0}
    },
    matchesCardItem:{
        marginTop:-35,
        backgroundColor:PRIMART_COLOR,
        paddingVertical:7,
        paddingHorizontal:20,
        borderRadius:20,
    },
    matchesTextCardItem:{
        fontFamily:ICON_FONT,
        color:WHITE,
    },
    descriptionCardItem:{
        color:GRAY,
        textAlign:'center'
    },
    status:{
        paddingBottom:20,
        flexDirection:'row',
        alignItems:'center',
    },
    statusText:{
        color:GRAY,
        fontSize:12
    },
    online:{
        height:6,
        width:6,
        backgroundColor:ONLINE_STATUS,
        borderRadius:3,
        marginRight:4
    },
    offline:{
        height:6,
        width:6,
        backgroundColor:OFFLINE_STATUS,
        borderRadius:3,
        marginRighr:4,
    },
    actionCardItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:30,
    },
    button:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:WHITE,
        marginHorizontal:7,
        alignItems:'center',
        justifyContent:'center',
        shadowOpacity:0.15,
        shadowRadius:20,
        shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
    },
    miniButton:{
        width:40,
        height:40,
        borderRadius:30,
        backgroundColor:WHITE,
        marginHorizontal:7,
        alignItems:'center',
        justifyContent:'center',
        shadowOpacity:0.15,
        shadowRadius:20,	shadowColor: DARK_GRAY,
        shadowOffset: { height: 10, width: 0 }
    },
    star:{
        fontFamily: ICON_FONT,
		color: STAR_ACTIONS
    },
    like: {
        fontSize:25,
        fontFamily:ICON_FONT,
        color:LIKE_ACTIONS,
    },
    dislike:{
        fontSize:25,
        fontStyle:ICON_FONT,
        color:LIKE_ACTIONS
    },
    flash:{
        fontFamily:ICON_FONT,
        color:FLASH_ACTIONS
    },
    /*============STYLE MODULES==================*/
    //COMPONENT - CITY 

    city:{
        backgroundColor:WHITE,
        padding:10,
        borderRadius:20,
        width:90,
        shadowOpacity:0.05,
        shadowRadious:10,
        shadowColor:BLACK,
        shadowRadius:{height:0, width:0}
    },
    cityText:{
        fontFamily:ICON_FONT,
        color:DARK_GRAY,
        fontSize:13
    },
})