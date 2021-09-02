import Vue from 'vue';
import BuiltCertificate from './Vue/BuiltCertificateInline.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(BuiltCertificate)
}).$mount(".GetCertificateInline");