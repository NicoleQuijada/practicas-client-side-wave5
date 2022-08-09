const React = require('react');

function Form() {
    return (
        <form>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' id='name' />
            <label htmlFor='apellido'>Apellido:</label>
            <input type='text' id='apellido' />
            <br></br>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' />
            <label htmlFor='telefono'>Teléfono:</label>
            <input type='tel' id='telefono' />
            <br></br>
            <label htmlFor='countries'>Pais:</label>
            <select name='countries'>
                <option value='Argetina'>Argetina</option>
                <option value='Colombia'>Colombia</option>
                <option value='Chile'>Chile</option>
                <option value='Venezuela'>Venezuela</option>
            </select>
            <label htmlFor='localidad'>localidad:</label>
            <select name='localidad'>
                <option value='Buenos-aires'>Buenos aires</option>
                <option value='Bogota'>Bogota</option>
                <option value='Santiago'>Santiago</option>
                <option value='Caracas'>Caracas</option>
            </select>
            <br></br>
            <label htmlFor='tipo-domicilio'>Tipo domicilio</label>
            <div id='tipo-domicilio' >
                <label htmlFor='residencial'>Residencial</label>
                <input name='tipo' type='radio' id='residencial' />
                <br></br>
                <label htmlFor='laboral'>Laboral</label>
                <input name='tipo' type='radio' id='laboral' />
            </div>

            <br></br>
            <label htmlFor=''></label>
            <input type='' id='' />
            <label htmlFor=''></label>
            <input type='' id='' />
            <label htmlFor=''></label>
            <input type='' id='' />
            <label htmlFor=''></label>
            <input type='' id='' />
            <label htmlFor=''></label>
            <input type='' id='' />
            <label htmlFor=''></label>
            <input type='' id='' />
        </form>
    )
}

module.exports = Form;