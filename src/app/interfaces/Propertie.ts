export interface Propertie{
    calle: string
    ciudad: string
    colonia: string
    cp: string
    direccion: string
    estado: string
    id: string
    imagenes: string
    numero_exterior: string
    numero_interior: string
    tipo_negocio: string
    tipo_construccion: string
    descripcion: string
    tipo_propiedad: string
    operacion: string
    valor: number
    fecha_reg: string
    documentos: Documentos[]
}

export interface Images{
    url: string
}

export interface PropertyType{
    id: number
    tipo: string
}

export interface Estados{
    id: number
    estado: string
}

export interface TipoOperacion{
    id: number
    tipo: string
}

export interface Documentos{
    id: number
    nombre: string
    url: string
}

export interface Comentarios{
    id: number
    comentario: string
    fecha: string
    hora: string
    usuario: string
}