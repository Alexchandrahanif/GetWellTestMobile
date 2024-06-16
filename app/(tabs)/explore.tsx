import { Image, StyleSheet, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';


import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation();

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

    <View className='w-full h-[45px] bg-[#1F978D] flex items-center'>
      <Text className='text-white font-[700] text-[20px]'>
        Personal Health Record
      </Text>
    </View>

    <View className="w-full h-[100px] relative">
      <View className="w-full h-[48px] bg-[#1F978D] rounded-b-[16px] absolute top-0" />

      <View className="w-[92%]  bg-white rounded-xl absolute flex flex-row p-[16px] gap-3 left-[28px] -translate-x-1/2">
        <Image source={require('@/assets/images/maskPhoto.png')} className="w-[48px] h-[48px] rounded-full" />
        <View className='flex'>
          <Text className="font-[700] text-[16px]">
            Alex Chandra Hanif
          </Text>
          <Text className="font-[400] text-[14px] text-slate-400">
            Pria . 25 thn . Golongan Darah B+
          </Text>
          <View className="w-[123px] h-[24px] bg-[#1F978D] rounded-lg flex justify-center items-center mt-[1px]">
            <Text className="font-[700] text-[10px] text-white">
              Wellness Program
            </Text>
          </View>
        </View>
      </View>
    </View>


    <View className='w-full h-[58px] flex flex-row px-[16px] mt-4 justify-between '>
     {/*  */}
     <TouchableOpacity onPress={() => console.log("Ke Halaman Hasil Konsultasi")}>
      <View className='h-[58px] w-[170px] border-[1px] border-slate-300 rounded-lg p-[8px] gap-1 flex flex-row'>
        <Image source={require('@/assets/images/medis.png')} />  
        <View>
          <Text className='font-[600] text-3'>
            Hasil Konsultasi
          </Text>
          <Text className='font-[400] text-[10px] text-slate-400 '>
            (2 hasil)
          </Text>
        </View>
      </View>
      </TouchableOpacity>

      {/*  */}
      <TouchableOpacity onPress={() => console.log("Ke Halaman Hasil Laboraturium")}>
      <View className='h-[58px] w-[170px] border-[1px] border-slate-300 rounded-lg p-[8px] gap-1 flex flex-row'>
        <Image source={require('@/assets/images/labor.png')} />  
        <View>
          <Text className='font-[600] text-3'>
            Hasil Laboraturium
          </Text>
          <Text className='font-[400] text-[10px] text-slate-400 '>
            (200 hasil)
          </Text>
        </View>
      </View>
      </TouchableOpacity>
     
    </View>


    <View className='w-full h-[58px] flex flex-row px-[16px] py-[9px] mt-4 justify-between  items-center '>
      <View>
        <Text className="font-[700] text-[14px]">
          12 Body Systems Terbaru
        </Text>
        <Text className="font-[400] text-[12px] text-slate-300">
          16 Juni 2024
        </Text>
      </View>

      <TouchableOpacity onPress={() => console.log("Ke Halaman Detail")}>
        <View className='flex flex-row gap-1'>
          <Text className="font-[400] text-[12px] text-[#25B2A6]">
              Lihat Detail
            </Text>
          <Image source={require('@/assets/images/right.png')} />
        </View>
      </TouchableOpacity>
    </View>


    <View className='w-full flex flex-row px-[16px] justify-between' >
      <Image source={require('@/assets/images/avatar.png')} />
      <Image source={require('@/assets/images/info.png')} />
    </View>
  </View>
  );
}