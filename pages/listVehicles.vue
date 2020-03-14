<template>
<div>
	<div class="navbar">
		<div class="navbar2">

			<b-img src="../images/logo.png" height="60"></b-img>
			<div class="espace">**</div>
			<b-button href="/createVehicle" variant="outline-light">Crear Vehículo</b-button>
			<div class="espace">**</div>
			<b-button href="/listVehicles" variant="outline-light">Lista de Vehículos</b-button>

		</div>
	</div>
    <div class="containerForm">
<b-form @submit.stop.prevent action="javascript:void(0)" @submit="createVehicle()">


<b-button type="submit" block variant="primary" v-if="!inEdition">Crear vehículo</b-button>
<b-button @click="updateVehicle()" block variant="warning" v-else>Actualizar vehículo</b-button>
</b-form>


<b-table striped hover :items="list_vehicles">
<template v-slot:cell(acciones)="row">
<b-button size="sm" @click="loadVehicle(row)" class="mr-2">Modificar</b-button>
<b-button size="sm" @click="deleteVehicle(row)" class="mr-2">Eliminar</b-button>
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

	.espace{
		color: #007acc
	}

</style>