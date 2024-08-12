'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { EditAlert } from '@/components/FlashEditCard';
import { Button } from '@/components/ui/button';
import { DataProp, GetData } from '../(server)/api';
import { NewFlashCardAlert } from '@/components/NewFlashCard';


export default function Admin() {
    const [editFlash, setEditFlash] = React.useState(false);
    const [newFlash , setNewFlash] = useState(false);
    const [editData , setEditData] = useState()
    const [intialData, setinitialData] = useState<DataProp[] | undefined>(undefined);


    const handleEditChange = (id:any) => {
      setEditFlash(!editFlash);
      setEditData(id)
    };
    
    const handleNew = (id:any) => {
      setNewFlash(!newFlash);
    };

  
  const handleGet = async () => {
    const data = await GetData(); 
    setinitialData(data);
  }

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='relative left-2 top-2 '>
        <Button onClick={()=>setNewFlash(!newFlash)} className='w-40 h-12 font-extrabold text-xl'>New</Button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
      {intialData?.map((data, index) => (
       <div  key={index} >
         <Card className="relative hover:bg-slate-100 hover:cursor-pointer" 
         onClick={()=>handleEditChange(data)}>
          <CardHeader className="flex items-center justify-between relative">
            <CardTitle>
              Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold"> Question: {data.question}</div>
            <p className="text-sm text-muted-foreground">Answer: {data.answer}</p>
          </CardContent>
        </Card>
       </div>
      ))}
      {editFlash && (
        <EditAlert open={editFlash} chagedData={editData} onclick={()=>setEditFlash(false)}/>
      )}
      {newFlash && (
        <NewFlashCardAlert open={newFlash} onclick={()=>setNewFlash(false)}/>
      )}
    </div>
    </div>
  );
}

