import React from 'react'
import './Credit.css'

function Credit() {
  return (
    <div className="formbold-main-wrapper">
    <div className="formbold-form-wrapper">
         Simula tu Crédito
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="formbold-input-wrapp formbold-mb-3">
          <label for="firstname" className="formbold-form-label"> Nombre y Apellido </label>
  
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Nombre..."
              className="formbold-form-input"
            />

          </div>
        </div> 

        <div className="formbold-mb-3 formbold-input-wrapp">
          <label for="phone" className="formbold-form-label"> Teléfono </label>
  
          <div>
           
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="numero Telefónico"
              className="formbold-form-input"
            />
          </div>
        </div>

        <div className="formbold-mb-3">
          <label for="email" className="formbold-form-label"> Correo </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="formbold-form-input"
          />
        </div>

        <div className="formbold-mb-3">
          <label for="address" className="formbold-form-label"> Localidad </label>
  
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Localidad"
            className="formbold-form-input formbold-mb-3"
          />
          
        </div>
  
  <h1>DATOS DEL VEHÍCULO</h1>
        <div className="formbold-mb-3">
          <label className="formbold-form-label">Marca</label>
  
          <select className="formbold-form-input" name="occupation" id="occupation">
            <option value="male">Chevrolet</option>
            <option value="female">Ford</option>
            <option value="others">Others</option>
          </select>

          <label className="formbold-form-label">Año-Modelo</label>
  
          <select className="formbold-form-input" name="occupation" id="occupation">
            <option value="male"> menor al 2005</option>
            <option value="female">Mayor al 2005</option>
            <option value="others">Others</option>
          </select>
        </div>
  
        
  
      
        
  
       
  
        
  
        
  
        <button className="formbold-btn">Calcular</button>
      </form>
    </div>
  </div>
  )
}

export default Credit