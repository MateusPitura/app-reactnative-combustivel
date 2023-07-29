import React, { useState, useRef} from "react";
import { 
    View, 
    Text, 
    TouchableOpacity,
    StatusBar,
} from "react-native";

//Import Style
import Style from "../style/screen-calculadora";
import Typography from "../style/typography";
import Color from "../style/color";

//Import Asset
import Stack from '../asset/icon/stack-drawer-navigation.svg';

//Import Component
import Input from "../component/input";
import Shadow from "../component/shadow";
import Button from "../component/button";
import Modal from "../component/modal";
import CarData from "../data/car";
import PriceKeyboard from "../component/price-keyboard";

export default function({navigation}: any){

    const [precoEtanol, setPrecoEtanol] = useState("3,84");
    const [precoGasolina, setPrecoGasolina] = useState("5,43");
    const [keyboardEtanol, setKeyboardEtanol] = useState(false);
    const [keyboardGasolina, setKeyboardGasolina] = useState(false);
    const [relacaoCombustivel, setRelacaoCombustivel] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [dataIsValid, setDataIsValid] = useState(true);

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
        if(checkInput(
            "^(?!(^([0]{1,2})([\,][0]{1,2})?$)$)(^([0-9]{1,2})([\,][0-9]{1,2})?$)", //Rejeita 0, 0,0 ou 0,00. Aceita 1 número inteiro e, opcionalmente, seguido de vírgula e 1 ou 2 números
            [precoEtanol, precoGasolina], 
            setDataIsValid
        )){
            handleCalcularRelacao();
            handleToggleModalIsVisible();
        }
    }

    const inputPrecoEtanol = useRef(null);

    return(
        <View style={Style.background}>
            <StatusBar
                backgroundColor={Color.vermelho}
                barStyle={"light-content"}
            />
            <View style={Style.header}>
                <TouchableOpacity
                    onPress={()=>navigation.toggleDrawer()}
                >
                    <Stack fill={Color.branco} width={50} height={50}/>
                </TouchableOpacity>
            </View>
            <Shadow style={Style.shadow}>
                <View style={Style.corner}></View>
            </Shadow>
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
                    setState={setPrecoEtanol}
                    keyboard={setKeyboardEtanol}
                    returnKeyType="next"
                    next={inputPrecoEtanol}
                />
                <PriceKeyboard
                    visible={keyboardEtanol}
                    setVisible={setKeyboardEtanol}
                    value={precoEtanol}
                    setValue={setPrecoEtanol}
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
                    setState={setPrecoGasolina}
                    keyboard={setKeyboardGasolina}
                    returnKeyType="done"
                    identifier={inputPrecoEtanol}
                    action={handleBtnCalcular}
                />
                <PriceKeyboard
                    visible={keyboardGasolina}
                    setVisible={setKeyboardGasolina}
                    value={precoGasolina}
                    setValue={setPrecoGasolina}
                />
                <Button
                    title="calcular"
                    onPress={handleBtnCalcular}
                />
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
            </View>
        </View>
    );
}