import './CalcDollar.css'

function CalcDollar() {

    const mensagem = (function () {
        alert(`Bora`)
    })

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                <div class="form-group  mb-3">
                    <label for="reais">Valor em Reais</label>
                    <input type="text" class="form-control" id="reais" />
                </div>
                <div class="form-group mb-3">
                    <label for="cotacao">Cotação do Dólar</label>
                    <input type="text" class="form-control" id="cotacao" />
                </div>
                <button type="button" onClick={mensagem} class="btn btn-primary w-100">Calcular</button>

            </form>
        </>
    )
}

export default CalcDollar