import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   // console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio}>
                <option value=""></option>)
                
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa