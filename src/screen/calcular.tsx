import React, { useState, useRef} from "react";
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    StatusBar
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

export default function({navigation}: any){

    const [precoEtanol, setPrecoEtanol] = useState("");
    const [precoGasolina, setPrecoGasolina] = useState("");
    const [relacaoCombustivel, setRelacaoCombustivel] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(false);

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
                <Text style={Typography.regular}>
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
                    action={()=>{handleBtnCalcular()}}
                />
                <Button
                    title="calcular"
                    onPress={()=>{handleBtnCalcular()}}
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
                        O etanol está custando {relacaoCombustivel}% da gasolina{'\n'}
                    </Text>
                    <Text style={Typography.modal}>
                        Portanto é mais vantajoso abastecer com etanol{'\n'}
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