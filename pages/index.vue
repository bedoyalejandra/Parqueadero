<template>
	<div class="navbar">
		<div class="navbar2">
			<b-img src="../images/logo.png" height="60"></b-img>
			<div class="containerButton"> 
				<div class="textButton"> 
					Lista de Vehículos
				</div>
			</div>

			<div class="containerButton"> 
				<div class="textButton"> 
					Crear Vehículo
				</div>
			</div>
		</div>
	</div>
    
</template>

<script src="../assets/index.js"/>

<style scoped>

	.navbar{
		background-color: #ff8d00;
	}

	.navbar2{
		
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		align-content: stretch;
	}
	

	.logo{
		color: white;
		font-family: 'Rubik Mono One', sans-serif;
		font-size: 30px;
	}

	.containerButton{
		border: 2px solid;
		border-color: #fff;
		border-radius: 50px;
		-webkit-border-radius: 5px 10px;  /* Safari  */
  		-moz-border-radius: 5px 10px;     /* Firefox */
		margin-left: 10px;
		margin-right: 10px;
	}

	.textButton{
		font-family: 'Anton', sans-serif;
		font-size: 20px;
		color: #FFF;
		margin-left: 10px;
		margin-right: 10px;
	}


</style>