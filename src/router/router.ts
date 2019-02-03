import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes',(req: Request,res:Response)=>{
    const query =`
        SELECT * 
        FROM heroes
    `;

    MySQL.ejecutarQuery(query,(err:any,heroes:Object[])=>{

        if(err){
            res.status(400).json({
                err:true,
                error: err
            });
        }else{
            res.json({
                ok:true,
                heroes: heroes
            })
        }
    });

});

router.get('/heroes/:id',(req: Request,res:Response)=>{
    const id = req.params.id;

    const escapeID = MySQL.instance.cnn.escape(id);

    const query =`
        SELECT * 
        FROM heroes
        where id=${escapeID}
    `;

    MySQL.ejecutarQuery(query,(err:any,heroe:Object[])=>{

        if(err){
            res.status(400).json({
                err:true,
                error: err
            });
        }else{
            res.json({
                ok:true,
                heroe: heroe
            })
        }
    });


});


export default router;

