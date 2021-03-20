import Vue from'vue';
import BuiltCertificate from './Vue/BuiltCertificate.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(BuiltCertificate)
}).$mount(".GetCertificate");
