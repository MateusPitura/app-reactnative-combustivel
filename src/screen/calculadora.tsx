import React, { useState} from "react";
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
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
    const [comparacaoCombustivel, setComparacaoCombustivel] = useState(0);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const handleCalcularComparacao = () => {
        setComparacaoCombustivel((parseFloat(precoEtanol)/parseFloat(precoGasolina))*100); //Calcula a relação entre etanol e gasolina (etanol/gasolina) e multiplica por 100 para transformar em porcentagem
    }

    const handleToggleModalIsVisible = () => {
        setModalIsVisible(!modalIsVisible);
    }

    const handleCalcularComparacaoAndToggleModalIsVisible = () => {
        handleCalcularComparacao();
        handleToggleModalIsVisible();
    }

    return(
        <View style={Style.background}>
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
                    placeholder="3.84"
                    setState={setPrecoEtanol}
                />
                <Text style={Typography.regular}>
                    Preço da gasolina
                </Text>
                <Input
                    placeholder="5.43"
                    setState={setPrecoGasolina}
                />
                <Button
                    title="calcular"
                    onPress={handleCalcularComparacaoAndToggleModalIsVisible}
                />
                <Modal
                    visible={modalIsVisible}
                >
                    <Text style={Typography.header}>
                        Resultado{'\n'}
                    </Text>
                    <Text style={Typography.modal}>
                        O etanol está custando {comparacaoCombustivel}% da gasolina{'\n'}
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