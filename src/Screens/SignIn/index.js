import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { McImage, McText } from '../../Components';
import { Images } from '../../Constants';

const SignIn = ({navigation}) => {
    const theme= useTheme();

    return (
        <View>
            <StatusBar hidden={true}/>
            <View style={{flexDirection:"row"}}>
                <McImage source={Images.color_bar}/>
                <View style={{
                    marginTop:44,
                    marginHorizontal:26,
                    marginBottom:53,
                    justifyContent:"space-between"
                }}>
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <McText medium size={24} color={theme.colors.text1}>06:20 PM</McText>    
                            <McImage source={Images.cloud} style={{marginLeft:20}}/>
                            <McText semi size={13} color={theme.colors.text1} style={{marginLeft:8}}>34º C</McText>
                        </View> 
                        <McText medium size={13} color={theme.colors.text3} style={{marginTop:7}}>Nov.10.2020 | Wednesday</McText>
                    </View>
                    <View>
                        <McImage source={Images.logo}/>
                        <McText seconday size={28} color={theme.colors.text1} style={{
                            marginTop:16
                        }}>eWallet</McText>
                        <View style={{
                            alignContent:'space-between', height:110, width:189
                        }}>
                            <McText medium size={14} color={theme.colors.text3} style={{
                                marginTop:16, lineHeight:22
                            }}>Open An Account For Digital E-Wallet Solutions. Instant Payouts.</McText>
                            <McText medium size={14} color={theme.colors.text3} style={{
                                marginTop:16
                            }}>Join For Free.</McText>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                        onPress={()=>navigation.replace("Home")}
                        style={{
                            height:50,
                            width:190,
                            borderRadius:10,
                            backgroundColor:theme.colors.primary,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <McText semi size={16} color={"#212330"}>Sign In</McText>
                            <McImage source={Images.right_arrow} style={{marginLeft:8}}/>
                        </TouchableOpacity>
                        <View style={{alignItems:"center", marginTop:30}}>
                            <McText size={16} color={theme.colors.text1}>Create an account</McText>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignIn;
