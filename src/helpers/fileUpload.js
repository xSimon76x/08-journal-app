export const fileUpload = async( file ) => {

    if (!file ) throw new Error('No hay ningún archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/duatzoely/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !response.ok ) throw new Error('No se pudo subir la imagen');

        const cloudResp = await response.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log( error );
        throw new Error( error.message );
    }
};
