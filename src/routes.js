import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


const FiscalDasRotas = createStackNavigator();

import tela1 from "./telas/tela1/index";
import tela2 from "./telas/tela2/index";
import tela3 from "./telas/tela3/index";
import tela4 from "./telas/tela4/index";
import tela5 from "./telas/tela5/index";


export default function Routes(){
    return(
        <NavigationContainer>
            <FiscalDasRotas.Navigator>
                <FiscalDasRotas.Screen name='tela1' component={tela1} />
                <FiscalDasRotas.Screen name='tela2' component={tela2} />
                <FiscalDasRotas.Screen name='tela3' component={tela3} />
                <FiscalDasRotas.Screen name='tela4' component={tela4} />
                <FiscalDasRotas.Screen name='tela5' component={tela5} />
            </FiscalDasRotas.Navigator>
        </NavigationContainer>
    );
}