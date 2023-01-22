import toast from 'react-hot-toast';

const defPosition = 'top-center';

const sucessNotify = (message:any,position?:any,timeOut?:any) => {
    toast.success(message,{
        position: position || defPosition,
        duration: timeOut || undefined       
   });
} 

const errorNotify = (message:any,position?:any,timeOut?:any) => {
  
    toast.error(message,{
         position: position || defPosition,
         duration: timeOut || undefined
    });
} 

const errorNotifyByErrorObject = (error:any,position?:any,timeOut?:any) => {

    let message = ''

    if (error.response)
    {
      if (error.response.data)
      {
        if (error.response.data.errorMessage) {
          message = error.response.data.errorMessage;
        }
        else{
          message = error.response.data;
        }
      }
      else
      {
          message = "something wrong happened"
      }
    }
    else
    {
      message = "Network Error! Check your internet connection"
    }

    toast.error(message,{
         position: position || defPosition,
         duration: timeOut || undefined
    });
} 

export  {sucessNotify,errorNotify,errorNotifyByErrorObject};