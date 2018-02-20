// importamos las librerias o componentes correspondientes en el Services que generamos nosotros
// tenemos que instalar la libreria angular-azure-blob-service

// npm install angular-azure-blob-service --save

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BlobService, UploadConfig, UploadParams } from 'angular-azure-blob-service'
import { Upload } from '../upload/upload';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs';

// mirar el final para saber a que se refiere el enviroment.azureContainers
const Config: UploadParams = {
    sas: environment.azureContainers.sasToken,
    storageAccount: environment.azureContainers.accountStorage,
    containerName: environment.azureContainers.containerName
};


@Injectable()
export class AzureStorageService {

    private percent;
    private configBlob: UploadConfig;
    // se declara en el constructor el BlobServices
    constructor(private blob: BlobService) {

    }
    // esta funcion es para subir archivos en la base de Azure-Blob
    uploadAzure(uploadFile: Upload): Observable<Response> {
        let azureUpload;
        if (uploadFile !== null) {
            const baseUrl = this.blob.generateBlobUrl(Config, uploadFile.file.name);
            this.configBlob = {
                baseUrl: baseUrl,
                sasToken: Config.sas,
                file: uploadFile.file,
                complete: () => {
                    console.log("Upload Azure Storage success!!!");
                    azureUpload = uploadFile.file.name;
                },
                error: () => {
                    console.log("Upload Azure Storage error!!!");
                    azureUpload = false;
                },
                progress: (percent) => {
                    this.percent = percent;
                    // esto muestra el porcentaje
                }
            };
            this.blob.upload(this.configBlob);
        }
        return azureUpload;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////


// En el environment de angular vamos a declarar la configuracion para la conexion con Azure


// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // generamos dentro del json o array un parametro azureContainers ( podes ponerle el nombre que quieras , mientras que sepas hacer)
    azureContainers: {
        storageHost: 'nameHost',
        baseUrl: '.blob.core.windows.net/',
        containerName: 'nameContainer',
        keyApi: 'keyApp',
        accountStorage: 'accountStorage',
        sasToken: 'sasTOKEN'
    }
}