import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function NewForm() {
  const [saveEdit, setSaveEdit] = React.useState({id:100000, question:"", answer: ""});
  const hanldeSave = async  (e:any)=>{
    e.preventDefault();
  try {
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
              <div className="flex justify-end mt-6">
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
import SaveForm, { DataProp } from "@/app/(server)/api";

export function NewFlashCardAlert({ open , onclick }:any) {
  return (
    <div className=" py-40 flex justify-center ">
       <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
          <NewForm/>
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
