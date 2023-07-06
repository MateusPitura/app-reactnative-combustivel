import React, { useState, useRef} from "react";
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
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

export default function({navigation}: any){

    const [precoEtanol, setPrecoEtanol] = useState("");
    const [precoGasolina, setPrecoGasolina] = useState("");
    const [relacaoCombustivel, setRelacaoCombustivel] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [dataIsValid, setDataIsValid] = useState(true);

    const handleCalcularRelacao = () => {
        setRelacaoCombustivel(((parseFloat(precoEtanol)/parseFloat(precoGasolina))*100).toFixed(2)); //Calcula a relação entre etanol e gasolina (etanol/gasolina) e multiplica por 100 para transformar em porcentagem. Então limita a 2 casas decimais
    }

    const handleToggleModalIsVisible = () => {
        setModalIsVisible(!modalIsVisible);
    }

    const handleBtnCalcular = () => {
        handleCalcularRelacao();
        handleToggleModalIsVisible();
    }

    const inputPrecoEtanol = useRef(null);

    return(
        <View style={Style.background}>
            <StatusBar
                backgroundColor={Color.vermelho}
                barStyle={"light-content"}
            />
            <TouchableWithoutFeedback
                onPress={()=>navigation.toggleDrawer()}
            >
                <View style={Style.header}>
                    <Stack fill={Color.branco} width={50} height={50}/>
                </View>
            </TouchableWithoutFeedback>
            <Shadow style={Style.shadow}>
                <View style={Style.corner}></View>
            </Shadow>
            <View style={Style.container}>
                <Text style={dataIsValid==true?Typography.regular:{backgroundColor:"#f0f"}}>
                    Preço do etanol
                </Text>
                <Input
                    placeholder="3,84"
                    inputMode="numeric"
                    setState={setPrecoEtanol}
                    returnKeyType="next"
                    next={inputPrecoEtanol}
                />
                <Text style={Typography.regular}>
                    Preço da gasolina
                </Text>
                <Input
                    placeholder="5,43"
                    inputMode="numeric"
                    setState={setPrecoGasolina}
                    returnKeyType="done"
                    identifier={inputPrecoEtanol}
                    action={handleBtnCalcular}
                />
                <Button
                    title="calcular"
                    data={[precoEtanol, precoGasolina]}
                    setDataIsValid={setDataIsValid}
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
                        A relação entre etanol e gasolina é de {relacaoCombustivel}%, já o rendimento do seu {CarData.nomeCarro} é de {CarData.rendimento}%{'\n'}
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