var socket=io();
socket.on('connect',()=>{
    console.log('conenctado al servidor')
})
//escuchar
socket.on('disconnect',()=>{
    console.log("perdimos conexion con el servidor")
})


//Enviar informacion
socket.emit('enviarMensaje',{
    usuario:'Luis Antonio',
    mensaje:'Hola Mundo'
}, (res)=>console.log('Respuesta del server'+JSON.stringify( res)))


///Escuchar informacion
socket.on('enviarMensaje',(mensaje)=>{
    console.log('servidor: ', mensaje)
})