<template>

<div>
    
		<div class="navbar">
		<div class="navbar2">

			<b-img src="../images/logo.png" height="60"></b-img>
			<div class="espace">**</div>
			<b-button href="/createVehicle" variant="outline-light">Crear Vehículo</b-button>
			<div class="espace">**</div>
			<b-button href="#list" variant="outline-light">Lista de Vehículos</b-button>

		</div>
	</div>

    
        <div class="tittle">Crear Vehículo</div>

  <div class="containerForm">
<b-form @submit.stop.prevent action="javascript:void(0)" @submit="createVehicle()">

    <b-form-group label="Tipo">
        <b-form-select v-model="vehicle.type" :options="options_type"></b-form-select>

        <b-form-invalid-feedback :state="validationType">
        Campo obligatorio
    </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group @submit.stop.prevent label="Placa" label-for="plaque">
        <b-form-input
            class="form-control"
            v-model="vehicle.plaque"
            placeholder="Placa"
            id="plaque"
        />
        <b-form-invalid-feedback :state="validationPlaque">
       Campo obligatorio
    </b-form-invalid-feedback>
    <b-form-invalid-feedback :state="validationExists">
        Vehículo existente
      </b-form-invalid-feedback>
    </b-form-group>

    

    <b-form-group @submit.stop.prevent label="Color" label-for="color">
        <b-form-input
            class="form-control"
            v-model="vehicle.color"
            placeholder="Ingrese el color"
            id="color"
        />

        <b-form-invalid-feedback :state="validationColor">
        Campo obligatorio
    </b-form-invalid-feedback>

    </b-form-group>

    <b-form-group @submit.stop.prevent label="Marca" label-for="marca">
        <b-form-input
            class="form-control"
            v-model="vehicle.make"
            placeholder="Ingrese la marca"
            id="marca"
        />

        <b-form-invalid-feedback :state="validationMake">
        Campo obligatorio
    </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group @submit.stop.prevent label="Ciudad" label-for="city">
        <b-form-input
            class="form-control"
            v-model="vehicle.city"
            placeholder="Ingrese la ciudad que aparece en la placa"
            id="city"
        />

         <b-form-invalid-feedback :state="validationCity">
        Campo obligatorio
    </b-form-invalid-feedback>
    </b-form-group>

   

    <b-form-group @submit.stop.prevent label="Fecha de ingreso" label-for="date">
        <b-input-group  class = "mb-3" > 
        <b-form-input 
                id = "date" 
                v-model ="vehicle.dateInput" 
                type = "text" 
                placeholder = "AAAA-MM-DD" 
        > </b-form-input > 
        <b-input-group-append > 
            <b-form-datepicker 
                v-model ="vehicle.dateInput" 
                button-only 
                right 
                locale = "en-US" 
                aria-controls = "example-input" 
            > </b-form-datepicker> 
        </b-input-group-append> 
        </b-input-group>

        <b-form-invalid-feedback :state="validationDate">
        Campo obligatorio
    </b-form-invalid-feedback>
    </b-form-group>

    

    <b-form-group @submit.stop.prevent label="Hora de ingreso" label-for="hour">

    <b-time id="ex-disabled-readonly" :disabled="disabled" :readonly="readonly" v-model="vehicle.hourInput"></b-time>

        <b-form-invalid-feedback :state="validationHour">
        Ingrese un valor válido
    </b-form-invalid-feedback>
    </b-form-group>


<b-button type="submit" block variant="primary" v-if="!inEdition">Crear vehículo</b-button>
<b-button @click="updateVehicle()" block variant="primary" v-else>Actualizar vehículo</b-button>
</b-form>

<div class="tittle" id="list">Listado de Vehículos</div>
<b-table striped hover :items="list_vehicles">
<template v-slot:cell(acciones)="row">
<b-button size="sm" @click="loadVehicle(row)" variant="primary" class="mr-2">Modificar</b-button>
<b-button size="sm" @click="deleteVehicle(row)" variant="primary" class="mr-2">Eliminar</b-button>
<b-button size="sm" @click="giveOut(row)" variant="primary" class="mr-2">Dar salida</b-button>
</template>
</b-table>

    </div>

</div>    
</template>

<script src="../assets/createVehicle.js"/>

<style scoped>

	.navbar{
		background-color: #007acc;
	}

	.navbar2{	
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		align-content: stretch;
	}

	.containerButton{
		border: solid #FFFFFF 2px;
		color: #fff;
		border-radius: 50px;
		-webkit-border-radius: 10px 10px;  /* Safari  */
  		-moz-border-radius: 10px 10px;     /* Firefox */
		margin-left: 10px;
		margin-right: 10px;
		font-family: 'Anton', sans-serif;
		font-size: 20px;
		padding: 5px;
		text-align: center;
		cursor: pointer;
		display: inline-block;
	}

		.containerButton:hover{
		border: solid #545252 2px;
		color: #545252;
		border-radius: 50px;
		-webkit-border-radius: 10px 10px;  /* Safari  */
  		-moz-border-radius: 10px 10px;     /* Firefox */
		margin-left: 10px;
		margin-right: 10px;
		font-family: 'Anton', sans-serif;
		font-size: 20px;
		padding: 5px;
		text-align: center;
		cursor: pointer;
		display: inline-block;
	}

        .tittle{
        font-family: 'Oswald', sans-serif;
        margin: 20px;
        font-size: 30px;
        font-weight: bold;
        color: #007acc
        }

	.espace{
		color: #007acc
	}

    	.button{
		background-color: #007acc;
		color: #fff;
		border-radius: 50px;
		-webkit-border-radius: 1px 1px;  /* Safari  */
  		-moz-border-radius: 1px 1px;     /* Firefox */
		margin-left: 10px;
		margin-right: 10px;
		padding: 5px;
		text-align: center;
		cursor: pointer;
		display: inline-block;
	}

    .containerForm{
        margin-right: 50px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: center;

    }
</style>