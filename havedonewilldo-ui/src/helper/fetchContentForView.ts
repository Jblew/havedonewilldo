import { View, RepoFile } from '@/model'
import Axios from 'axios'

export async function fetchContentForView(view: View): Promise<string> {
  if (view.text) return view.text
  else if (view.url) return fetchUrl(view.url)
  else if (view.repoFile) return fetchRepo(view.repoFile)
  else return 'Unknown content type'
}

async function fetchUrl(url: string) {
  const resp = await Axios.get(url)
  return resp.data
}

async function fetchRepo(repoFile: RepoFile) {
  return JSON.stringify(repoFile, undefined, 2)
}
