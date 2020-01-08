import Axios from 'axios'
import { HavedonewilldoConfig, validateConfig } from '@/model'

export async function fetchConfig(user: string, repo: string): Promise<HavedonewilldoConfig> {
  const url = getConfigUrl(user, repo)
  const content = (await Axios.get(url)).data
  const config: HavedonewilldoConfig = content
  validateConfig(config)
  return config
}

function getConfigUrl(user: string, repo: string) {
  return `https://raw.githubusercontent.com/${user}/${repo}/master/havedonewilldo.json`
}
