<script>

export default {
    name: "delete_item",
    methods:{
        delete_item:function (table,id,model, selector = '' ,closeall = false , url = false){
            if(localStorage.lang == 'ar'){
                var msg = 'هل أنت متأكد من عملية المسح';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
            }else{
                var msg = 'are you sure from delete operation';
                var confirm = 'yes';
                var cancel = 'cancel';

            }
            Swal.fire({
                title: msg,
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#035397',
                cancelButtonColor: '#aaa',
                confirmButtonText: confirm,
                cancelButtonText:cancel,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.post('/deleteitem',{
                        table:table,
                        id:id,
                        model:model,
                    }).then((e)=>{
                        if(e.data.data == 'info'){
                            Toast.fire({
                                icon:'info',
                                title:e.data.message[0]
                            });
                        }else{
                            Toast.fire({
                                icon:'success',
                                title:e.data.message[0]
                            });
                            if(url != false){
                                // window.vm.$inertia.visit(url)
                            }
                            if(selector != ''){
                                $(selector).remove();
                            }
                        }

                        if(closeall == true){
                            $('.modal').modal('hide')
                        }


                    });

                }
            })
        },
        cancel_request:async function (table,id, selector = '' ,closeall = false , url = false){
            var com = this;
            var reasons = {};
            for(let reason of com.handling_data.reasons){
                reasons[reason['id']] = reason['name'];
            }
            console.log(reasons);
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'هل أنت متأكد من عملية الغاء الطلب';
                var reason_cancelled = 'اختر سبب الغاء الطلب';
                var confirm = 'نعم أنا متأكد';
                var cancel = 'إلغاء';
            }else{
                var msg = 'are you sure from cancel request';
                var reason_cancelled = 'give reason to cancel order';
                var confirm = 'yes';
                var cancel = 'cancel';

            }

            const { value: reason } = await Swal.fire({
                title: msg,
                input: 'select',
                inputOptions: reasons,
                inputPlaceholder: reason_cancelled,
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        resolve();

                    })
                }
            })

            if (reason) {
                axios.post('/quotations/cancel-request',{
                    table:table,
                    id:id,
                    reason:reason,
                }).then((e)=>{
                    /*if(table == 'listings_infos'){
                        $(target).parent().parent().parent().parent().remove();
                    }else {
                        $(target).parent().parent().remove();
                    }*/
                    Toast.fire({
                        icon:'success',
                        title:e.data.message[0],
                    });

                    // window.vm.$inertia.visit(document.URL)

                });
            }

        },
    }
}
</script>

<style>
.swal2-container{
    z-index: 99999999999999999999999999;
}
</style>
