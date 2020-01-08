import ow from 'ow--fork-by-jblew-with-catching'

export interface HavedonewilldoConfig {
  title: string
  groups: ViewGroup[]
}

export function validateConfig(c: HavedonewilldoConfig) {
  ow(c, 'config', ow.object)
  ow(c.title, 'config.title', ow.string.nonEmpty)
  ow(
    c.groups,
    'config.groups',
    ow.array.ofType(ow.object.catching(o => validateViewGroup(o as ViewGroup))),
  )
}

export interface ViewGroup {
  public?: View
  private?: View
}

export function validateViewGroup(g: ViewGroup) {
  ow(
    g.public,
    'config.groups.[].public',
    ow.any(
      ow.undefined,
      ow.object.catching(o => validateView(o as View)),
    ),
  )
  ow(
    g.private,
    'config.groups.[].private',
    ow.any(
      ow.undefined,
      ow.object.catching(o => validateView(o as View)),
    ),
  )

  ow(
    g,
    'config.groups[]',
    ow.object.is(
      (o: any) => !!o.public || !!o.private || 'You must specify either private or public view',
    ),
  )
}

export interface View {
  title: string
  url?: string
  repoFile?: RepoFile
  text?: string
}

function validateView(v: View) {
  ow(
    v,
    'config.groups[]{view}',
    ow.object.is(
      (o: any) =>
        !!o.url || !!o.repoFile || !!o.text || 'You must specify either url, repo file or text',
    ),
  )

  ow(v.title, 'config.groups[]{view}.title', ow.string.nonEmpty)
  ow(v.url, 'config.groups[]{view}.url', ow.any(ow.undefined, ow.string.nonEmpty))
  ow(v.text, 'config.groups[]{view}.text', ow.any(ow.undefined, ow.string.nonEmpty))
  ow(
    v.repoFile,
    'config.groups[]{view}.repoFile',
    ow.any(
      ow.undefined,
      ow.object.catching(o => validateRepoFile(o as RepoFile)),
    ),
  )
}

export interface RepoFile {
  user: string
  repo: string
  path: string
}

export function validateRepoFile(r: RepoFile) {
  ow(r, 'repoFile', ow.object)
  ow(r.user, 'repoFile.user', ow.string.nonEmpty)
  ow(r.repo, 'repoFile.repo', ow.string.nonEmpty)
  ow(r.path, 'repoFile.path', ow.string.nonEmpty)
}
