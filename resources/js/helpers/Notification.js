class Notification
{
    success()
    {
        new Noty({
            type:'success',
            layout:'topRight',
            text: 'Successfully done',
            timeout:1000, 
        }).show();
    }
    update()
    {
        new Noty({
            type:'success',
            layout:'topRight',
            text: 'Successfully updated',
            timeout:1000, 
        }).show();
    }
    alert()
    {
        new Noty({
            type:'alert',
            layout:'topRight',
            text: 'Are you sure',
            timeout:1000, 
        }).show();
    }
    error()
    {
        new Noty({
            type:'error',
            layout:'topRight',
            text: 'Something went wrong',
            timeout:1000, 
        }).show();
    }
    warinng()
    {
        new Noty({
            type:'warinng',
            layout:'topRight',
            text: 'Opps! wrong',
            timeout:1000, 
        }).show();
    }
    image_validation()
    {
        new Noty({
            type:'error',
            layout:'topRight',
            text: 'Upload image less than 1mb',
            timeout:1000, 
        }).show();
    }
   
    
}
export default Notification=new Notification();