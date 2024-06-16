import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
  <View className=''>
    {/* Header */}
    <View className='w-full'>
      <View className='w-full h-[44px] bg-[#1F978D]'>      
      </View>
      <View className='w-full h-[48px] bg-[#1F978D] px-[16px] flex flex-row justify-between content-center'>
        <View className="h-full py-[12px]">
         <Image source={require('@/assets/images/logo.png')}  />
        </View>
        <View className='flex flex-row gap-[5px]'>
         <Image source={require('@/assets/images/notifications.png')}  />
         <View className='w-[48px] flex items-center'>
         <Image source={require('@/assets/images/maskPhoto.png')} className='h-[32px] w-[32px] object-cover'  />
         </View>
         </View>
      </View>
    </View> 

    <View className='w-full h-[180px] bg-[#1F978D] rounded-b-[16px] '>
      {/*  */}
      <View className='mt-[10px] px-[16px] flex flex-row gap-3' >
        <Image source={require('@/assets/images/maskPhoto.png')} className='w-[48px]'  />  
        <View>
          <Text className='text-white font-[700] text-4'>
            Hi, Bayu Prabu
          </Text>
          <Text className='text-white font-[400] text-3'>
          Get start your healthy journey
          </Text>
        </View>
      </View>
      {/*  */}
      <View className='w-full h-[48px] px-[16px] py-[15px]'>
        <View className='flex items-center flex-row gap-1'>
          <Image source={require('@/assets/images/alamat.png')}   />  
          <Text  className='text-white font-[400] text-3'>
          Alamat yang digunakan : (rumah) jalan delima 5
          </Text>
        </View>
      </View>
      {/*  */}
      <View className='w-full px-[16px] flex flex-row justify-between'>
        <View className='w-[165px] h-[58px] bg-white opacity-20 rounded-[8px] px-[16px] py-[9px] '>
            <Text  className='text-white  font-[700] text-3'>Point Saya</Text>
            <View className='flex flex-row gap-1'>
              <Image source={require('@/assets/images/point.png')}  />  
              <Text  className='text-white  font-[400] text-3'>100 Point</Text>
            </View>
        </View>
        <View className='w-[165px] h-[58px] bg-white opacity-20 rounded-[8px] px-[16px] py-[9px] '>
            <Text  className='text-white  font-[700] text-3'>Voucher Saya</Text>
            <View className='flex flex-row gap-1'>
              <Image source={require('@/assets/images/voucher.png')}  />  
              <Text  className='text-white  font-[400] text-3'>60 item</Text>
            </View>
        </View>
       
        

      </View>
    </View>
    
    {/*  */}
    <View className='w-full h-[76px] py-[10px] px-[8px] flex flex-row justify-between'>
      <View className='w-[90px] flex items-center'>
        <Image source={require('@/assets/images/getDoctor.png')}  />  
        <Text className='font-[400] text-3'>Get Doctor</Text>
      </View>
      <View className='w-[99px] flex items-center'>
        <Image source={require('@/assets/images/getCounseling.png')}  />  
        <Text className='font-[400] text-3'>get Counseling</Text>
      </View>
      <View className='w-[90px] flex items-center'>
        <Image source={require('@/assets/images/getGCM.png')}  />  
        <Text className='font-[400] text-3'>Get CGM</Text>
      </View>
      <View className='w-[90px] flex items-center'>
        <Image source={require('@/assets/images/getFit.png')}  />  
        <Text className='font-[400] text-3'>Get Fit</Text>
      </View>
    </View>

    {/*  */}
    <View className="w-full h-[170px] px-[16px] py-[10px] ">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row  gap-5">
          <View className='w-[255px] h-[145px] bg-slate-200 rounded-xl flex justify-end p-[16px] '>
            <Text className='font-[700] text-[18px]'>
              Insulin Sehat
            </Text>
            <Text>
              Start from Rp.500.000 / month
            </Text>
          </View>
          <View className='w-[255px] h-[145px] bg-slate-200 rounded-xl flex justify-end p-[16px] '>
            <Text className='font-[700] text-[18px]'>
              Pembuluh Darah
            </Text>
            <Text>
              Start from Rp.400.000 / month
            </Text>
          </View>
          <View className='w-[255px] h-[145px] bg-slate-200 rounded-xl flex justify-end p-[16px] '>
            <Text className='font-[700] text-[18px]'>
              Jantung
            </Text>
            <Text>
              Start from Rp.900.000 / month
            </Text>
          </View>
         
        </View>
      </ScrollView>
    </View>
    {/*  */}
    <View className='w-full h-[40px] px-[16px] flex justify-center'>
      <Text className='font-[700] text-[20px]'>
        My Corporate
      </Text> 
    </View>

    {/*  */}
    <View className='w-full px-[16px]'>
      <View className='w-full h-[160px] border-[1px] border-slate-300 rounded-[12px]'>
        {/*  */}
        <View className='w-full border-b-[1px] border-slate-300 px-[16px] py-[8px] flex flex-row'>
          <Image source={require('@/assets/images/telemedika.png')}   />  
          <View className='ml-3'>
            <Text className='font-[700] text-[12px]'>
              PT. Telemedika Teknologi Indonesia 
            </Text>
            <Text className='font-[400] text-[10px]'>
              Department Product
            </Text>
          </View>
        </View>

        {/*  */}
        <View className='w-full h-[109px]  p-[16px] flex flex-row '>
          <View className='w-[112px] h-[63px] bg-[#F8D4D4] rounded-md '> 
            <Image source={require('@/assets/images/hebat.png')}  /> 
          </View>
          <View className='ml-3'>
            <Text className='font-[700] text-[20px]'>
              Hebat
            </Text>
            <Text className='font-[400] text-[12px]'>
              1 tahun (berlaku sampai 12 Dec 2024)
             </Text>
             <View className='bg-[#25B2A6] h-[24px] w-[80px] rounded-xl mt-2 flex items-center justify-center'>
                <Text className='text-white font-[400] text-[12px]'>
                  Lihat Detail
                </Text>
             </View>
          </View>
        </View>
      </View>
    </View>
  
  </View>
  );
}