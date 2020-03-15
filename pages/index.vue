<template>
<div>
	<div class="navbar">
		<div class="navbar2">

			<b-img src="../images/logo.png" height="60"></b-img>
			<div class="espace">**</div>
			<b-button href="/createVehicle" variant="outline-light">Crear Vehículo</b-button>
			<div class="espace">**</div>
			<b-button href="/createVehicle#list" variant="outline-light">Lista de Vehículos</b-button>

		</div>
	</div>

	<div class="container">
			<div class="container2">
				    <b-img src="../images/car.png" height="200" rounded="circle" alt="Circle image"></b-img>
					<div class="tittle"> Carros </div>
					<div class="text"> $ 8.000 </div>

		</div>

		<div class="container2">
				    <b-img src="../images/bike.png" height="200" rounded="circle" alt="Circle image"></b-img>
					<div class="tittle"> Bicicletas </div>
					<div class="text"> $ 2.000 </div>

		</div>

		<div class="container2">
				    <b-img src="../images/motocycle.png" height="200" rounded="circle" alt="Circle image"></b-img>
					<div class="tittle"> Motos </div>
					<div class="text"> $ 4.000 </div>

		</div>

		<div class="container2">
				    <b-img src="../images/truck.png" height="200" rounded="circle" alt="Circle image"></b-img>
					<div class="tittle"> Camiones </div>
					<div class="text"> $ 21.000 </div>

		</div>
	</div>

</div>
    
</template>

<script src="../assets/index.js"/>

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

	.container2{
				background-color: #efefef;
		display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	padding: 20px;
	justify-content: center;
	align-items: center;
	align-content: stretch;
	}

	.container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-between
}

        .tittle{
        font-family: 'Oswald', sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: #007acc
        }

		        .text{
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #000
        }

	.espace{
		color: #007acc
	}




</style>