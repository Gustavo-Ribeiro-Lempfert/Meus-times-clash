import Jogador from '../../Jogador/Jogador'
import './Times.css'

const Time = (props, aoDeletar) => {

    return (
        (props.jogadores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>  
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} imagem={jogador.imagem} posicao={jogador.posicao} aoDeletar={aoDeletar}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time