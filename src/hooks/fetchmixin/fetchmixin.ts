import { defineComponent } from 'vue'
import type { FetchMixinData, ParamsI } from './types'
import axios from 'axios'
import { BASE_URL, TOKEN } from '@/constants'

// helper funct:
const createConfig = (endpoint: string, id?: number | null, params?: ParamsI) => {
  const url = !!id ? `${BASE_URL}${endpoint}${id}` : `${BASE_URL}${endpoint}`

  return {
    method: 'GET',
    url,
    params,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }
}

export const fetchMixin = <T>() =>
  defineComponent({
    data(): FetchMixinData<T> {
      return {
        data: null,
        loading: false,
        error: null
      }
    },
    methods: {
      async fetchData(endpoint: string, id?: number, params?: ParamsI): Promise<void> {
        this.loading = true
        this.error = null

        try {
          const config = createConfig(endpoint, id, params)
          const response = await axios(config)
          this.data = !!id ? response.data : response.data.results
        } catch (err) {
          this.error = (err as Error).message
        } finally {
          this.loading = false
        }
      }
    }
  })
