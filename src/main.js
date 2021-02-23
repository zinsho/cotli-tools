import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.config.globalProperties.$filters = {
    asPct(value) {
        if (!value) return ''
        return (Math.floor(value * 10000) / 100) + '%'
    },
    asSci(value) {
        if (!value) return ''
        if (Math.log10(value.toString()) >= 6) {
            let num = value.toString(),
                pow = Math.log10(num),
                first = num.substring(0,1),
                dec = num.substring(1,3)
            return first + "." + dec + "e+" + Math.floor(pow)
        }
        if (value >= 1000000) {
            return value.toExponential(2)
        }
        return value
    }
}
app.use(store).use(router).mount('#app')
