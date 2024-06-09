import React from 'react';
import { redirect } from 'next/navigation'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData(formData: FormData) {
  "use server"
  // await timeout(2000);
  let queryString = '';

  formData.forEach((value, key) => {
    queryString += `${key}=${value}&`
  });

  redirect(`/step-2?${encodeURI(queryString)}`)
}

export default async function page() {

  // const data = async () => await getData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-5'>

      <Card className={'min-w-[350px justify-center relative'}>
        <CardHeader>
          <CardTitle>SUZUKI CELERIO</CardTitle>s
          <CardDescription>4 Seats | 5 Doors | 1 Medium Bags</CardDescription>
        </CardHeader>
        <CardContent>
        <Image src='https://www.drivesouthafrica.com/wp-content/uploads/2016/10/groupa_suzuki_celerio_sa_fir-300x200.jpg' alt='vehicle' width='200' height='100'/>

          <form action={getData}>
            <input type="hidden" name="submission" value="true"/>
            <input type="hidden" name="tp_option_code" value="GENCRFIR004A_SUNL"/>
            <input type="hidden" name="insurance_type" value="S"/>
            <input type="hidden" name="tp_rate_id" value="9169382"/>
            <input type="hidden" name="veh_id" value="19994"/>
            <input type="hidden" name="supplier_id" value="94002"/>
            <input type="hidden" name="supplier_code" value="FIR"/>
            <input type="hidden" name="has_key_drop_opff" value=""/>
            <input type="hidden" name="price_per_day" value="365"/>
            <input type="hidden" name="vehicle_api" value="A"/>
            <input type="hidden" name="dsa_api" value=""/>                    
            <input type="hidden" name="pay_state" value="no_pay"/>
            <input type="hidden" name="pickup_data" value="Pickup branch Branch is open 24 hours on Saturday 2024-05-18."/>
            <input type="hidden" name="dropoff_data" value="Dropoff branch Branch is open 24 hours on Thursday 2024-05-23."/>
            <Button>select</Button>
          </form>
        </CardContent>
      </Card>

      <Card className={'min-w-[350px justify-center relative'}>
        <CardHeader>
          <CardTitle>KIA PICANTO</CardTitle>
          <CardDescription>4 Seats | 5 Doors | 1 Medium Bags</CardDescription>
        </CardHeader>
        <CardContent>
           <Image src='https://www.drivesouthafrica.com/wp-content/uploads/2016/10/groupt_kia_picanto_eur_sa-300x150.jpg' alt='vehicle' width='200' height='100'/>
          <form action={getData}>
            <input type="hidden" name="submission" value="true"/>
            <input type="hidden" name="tp_option_code" value="GENCRFIR004A_SUNL"/>
            <input type="hidden" name="insurance_type" value="S"/>
            <input type="hidden" name="tp_rate_id" value="9169382"/>
            <input type="hidden" name="veh_id" value="19995"/>
            <input type="hidden" name="supplier_id" value="94002"/>
            <input type="hidden" name="supplier_code" value="FIR"/>
            <input type="hidden" name="has_key_drop_opff" value=""/>
            <input type="hidden" name="price_per_day" value="365"/>
            <input type="hidden" name="vehicle_api" value="A"/>
            <input type="hidden" name="dsa_api" value=""/>                    
            <input type="hidden" name="pay_state" value="no_pay"/>
            <input type="hidden" name="pickup_data" value="Pickup branch Branch is open 24 hours on Saturday 2024-05-18."/>
            <input type="hidden" name="dropoff_data" value="Dropoff branch Branch is open 24 hours on Thursday 2024-05-23."/>
            <Button>select</Button>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}
