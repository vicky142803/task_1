import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function EditForm({EditData}:{EditData : DataProp}) {
  const [saveEdit, setSaveEdit] = React.useState({id: EditData.id, question: EditData.question, answer: EditData.answer});
 
  const hanldeSave = async  (e:any)=>{
    e.preventDefault();
  try {
    console.log("Edited Data:",saveEdit) 
    const res = await SaveForm(saveEdit.id , saveEdit.question , saveEdit.answer)
    toast.success( res ,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark"
  })
  } catch (error) {
    toast.error("Error Occured")
  }
}
  
  const handleDelete = async (e:any)=>{
   try{
    e.preventDefault();
    const res = await DeleteData(saveEdit.id)
    toast.success( res ,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark"
  })
  }catch (error) {
      toast.error("Error Occured")
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-8">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="question"
                placeholder="Question"
                value={saveEdit.question}
                onChange={(e) =>
                  setSaveEdit({ ...saveEdit, question: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="answer"
                placeholder="Answer"
                value={saveEdit.answer}
                onChange={(e) =>
                  setSaveEdit({ ...saveEdit, answer: e.target.value })
                }
              />
              <div className="flex justify-between mt-6">
              <Button onClick={handleDelete} className="flex w-40 h-12 bg-red-500 items-center mt-6 hover:bg-red-700">Delete</Button>
              <Button onClick={hanldeSave} className="flex w-40 h-12 items-center mt-6">Save</Button>
              </div>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"/>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}


import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import SaveForm, { DataProp, DeleteData } from "@/app/(server)/api";

export function EditAlert({ open , chagedData , onclick }:any) {
  return (
    <div className=" py-40 flex ">
       <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
          <EditForm EditData={chagedData}/>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onclick}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}
