import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity,
    StatusBar,
    Keyboard,
} from "react-native";
import { 
    useDrawerStatus
} from "@react-navigation/drawer";

//Import Style
import Style from "../style/screen-calculadora";
import Typography from "../style/typography";
import Color from "../style/color";

//Import Asset
import Stack from '../asset/icon/stack-drawer-navigation.svg';

//Import Component
import Input from "../component/input";
import { Shadow } from 'react-native-shadow-2';
import Button from "../component/button";
import Modal from "../component/modal";
import CarData from "../data/car";
import PriceKeyboard from "../component/price-keyboard";

export default function({navigation}: any){

    const [precoEtanol, setPrecoEtanol] = useState("3,84");
    const [precoGasolina, setPrecoGasolina] = useState("5,43");
    const [firstClickEtanol, setFirstClickEtanol] = useState(true)
    const [firstClickGasolina, setFirstClickGasolina] = useState(true)
    const [keyboardEtanol, setKeyboardEtanol] = useState(false);
    const [keyboardGasolina, setKeyboardGasolina] = useState(false);
    const [relacaoCombustivel, setRelacaoCombustivel] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [dataIsValid, setDataIsValid] = useState(true);
    const [isDrawerClicked, setIsDrawerClicked] = useState(false);

    const handleCalcularRelacao = () => {
        setRelacaoCombustivel(((
            parseFloat(precoEtanol?precoEtanol.replace(',','.'):"0")
            /
            parseFloat(precoGasolina?precoGasolina.replace(',','.'):"0")
        )*100).toFixed(2)); //Calcula a relação entre etanol e gasolina (etanol/gasolina) e multiplica por 100 para transformar em porcentagem. Então limita a 2 casas decimais
    }

    const handleToggleModalIsVisible = () => {
        setModalIsVisible(!modalIsVisible);
    }

    const checkInput = (regex: any, data: any, setDataIsValid: any) => {
        for(var i=0; i<data.length; i++){
            if(RegExp(regex).test(data[i])==false){
                setDataIsValid(false);
                return false;
            }
        }
        setDataIsValid(true);
        return true;
    }

    const handleBtnCalcular = () => {
        if(firstClickEtanol==true || firstClickGasolina==true){
            setDataIsValid(false);
            return;
        }
        if(checkInput(
            "^(?!(^([0])([\,][0]{1,2})?$)$)(^([0-9]{1,2})([\,][0-9]{1,2})?$)", //Rejeita 0, 0,0 ou 0,00. Aceita 1 número inteiro e, opcionalmente, seguido de vírgula e 1 ou 2 números
            [precoEtanol, precoGasolina], 
            setDataIsValid
        )){
            Keyboard.dismiss();
            handleCalcularRelacao();
            setKeyboardEtanol(false);
            setKeyboardGasolina(false);
            handleToggleModalIsVisible();
        }
    }

    const inputPrecoEtanol = useRef(null);
    const isDrawerOpen = useDrawerStatus() === 'open';

    useEffect(
        useCallback(
            ()=>{
                if(isDrawerOpen){
                    setIsDrawerClicked(true);
                    return;
                }
                setIsDrawerClicked(false);
            }, [isDrawerOpen]
        ), [isDrawerOpen]
    );

    return(
        <View style={Style.background}>
            {isDrawerClicked==true?
            <StatusBar
                backgroundColor={Color.branco2}
                //barStyle={"dark-content"}
                barStyle={"light-content"} //Dark
            />
            :
            <StatusBar
                backgroundColor={Color.vermelho}
                //barStyle={"light-content"}
            />
            }
            <View style={Style.header}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.toggleDrawer();
                    }}
                    style={Style.touchable}
                >
                    <Stack fill={Color.branco1} width={50} height={50}/>
                </TouchableOpacity>
            </View>
            <Shadow 
                sides={{"end": false, "start": false, "bottom": false, "top": true}}
                stretch={true}
            >
                <View style={Style.container}>
                    <Text style={Typography.regular}>
                        Preço do etanol
                    </Text>
                    <Input
                        dataIsValid={dataIsValid}
                        placeholder="3,84"
                        value={precoEtanol}
                        inputMode="numeric"
                        maxLength={4}
                        firstClick={firstClickEtanol}
                        setFirstClick={setFirstClickEtanol}
                        keyboard={setKeyboardEtanol}
                    />
                    <Text style={Typography.regular}>
                        Preço da gasolina
                    </Text>
                    <Input
                        dataIsValid={dataIsValid}
                        placeholder="5,43"
                        value={precoGasolina}
                        inputMode="numeric"
                        maxLength={4}
                        firstClick={firstClickGasolina}
                        setFirstClick={setFirstClickGasolina}
                        keyboard={setKeyboardGasolina}
                    />
                    <Button
                        title="calcular"
                        onPress={handleBtnCalcular}
                    />
                </View>
            </Shadow>
            <Modal
                visible={modalIsVisible}
            >
                <StatusBar
                    backgroundColor={Color.vermelhoAcinzentado}
                />
                <Text style={Typography.header}> 
                    Resultado{'\n'}
                </Text>
                <Text style={Typography.modal}>
                    É mais vantajoso abastecer seu {CarData.nomeCarro} com
                    <Text style={Typography.highlight}> {relacaoCombustivel<CarData.rendimento?"etanol":"gasolina"}</Text>
                    {'\n'}
                </Text>
                <Text style={Typography.modal}>
                    A relação entre etanol e gasolina é de {relacaoCombustivel?relacaoCombustivel.replace('.',','):"0"}%, já o rendimento do seu {CarData.nomeCarro} é de {CarData.rendimento?CarData.rendimento.replace('.',','):"0"}%{'\n'}
                </Text>
                <View style={Style.button}>
                    <Button
                        title="ok"
                        onPress={handleToggleModalIsVisible}
                    />
                </View>
            </Modal>
            <PriceKeyboard
                visible={keyboardEtanol}
                setVisible={setKeyboardEtanol}
                value={precoEtanol}
                setValue={setPrecoEtanol}
            />
            <PriceKeyboard
                visible={keyboardGasolina}
                setVisible={setKeyboardGasolina}
                value={precoGasolina}
                setValue={setPrecoGasolina}
            />
        </View>
    );
}