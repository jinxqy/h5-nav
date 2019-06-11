<template>
    <div>2
        <button @click="toGD">高德地图</button>
        <button @click="toBD">百度地图</button>
        <button @click="toTX">腾讯地图</button>
    </div>
</template>
<script>
import { mapNav } from '@/assets/untils';
export default {
    methods:{
        toGD(){
            mapNav({
                type: 'gd',
                point: {
                    lat: 104.068993,
                    lng: 30.546820
                },
                pointname: 'test'
            });
        },
        toBD(){
            mapNav({
                type: 'bd',
                point: {
                    lat: 34.264642646862,
                    lng: 108.95108518068
                },
                pointname: 'test'
            });
        },
        toTX(){
            mapNav({
                type: 'tx',
                point: {
                    lat: 104.068993,
                    lng: 30.546820
                },
                pointname: 'test'
            });
        }
    }
}
</script>

