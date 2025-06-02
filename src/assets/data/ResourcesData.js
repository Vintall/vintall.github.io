import { ref } from 'vue'

import AlternativeTo from './ResourceCards/AlternativeTo.js'
import CaesiumImageCreator from './ResourceCards/CaesiumImageCreator.js'
import CatlikeCoding from './ResourceCards/CatlikeCoding.js'
import CGAL from './ResourceCards/CGAL.js'
import Cyanilux from './ResourceCards/Cyanilux.js'
import Freepik from './ResourceCards/Freepik.js'
import FreeSfx from './ResourceCards/FreeSfx.js'
import FreeSound from './ResourceCards/FreeSound.js'
import Paletton from './ResourceCards/Paletton.js'
import Pixabay from './ResourceCards/Pixabay.js'
import RedBlobGames from './ResourceCards/RedBlobGames.js'
import RefactoringGuru from './ResourceCards/RefactoringGuru.js'
import Sensortower from './ResourceCards/Sensortower.js'
import Shadertoy from './ResourceCards/Shadertoy.js'
import SteamDB from './ResourceCards/SteamDB.js'

export const getTagById = (id) => tags.value.find(tag => tag.id === id)

export const tags = ref([
  { id: 'Gamedev', text: 'Gamedev', color: 'bg-red-600/50' },
  { id: 'Unity', text: 'Unity', color: 'bg-orange-500/50' },
  { id: 'Shaders', text: 'Shaders', color: 'bg-yellow-500/50' },
  { id: 'HLSL', text: 'HLSL', color: 'bg-lime-500/50' },
  { id: 'CG', text: 'CG', color: 'bg-green-500/50' },
  { id: 'VFX', text: 'VFX', color: 'bg-emerald-500/50' },
  { id: 'SFX', text: 'SFX', color: 'bg-emerald-500/50' },
  { id: 'Solid', text: 'SOLID', color: 'bg-cyan-500/50' },
  { id: 'FreeAssets', text: 'Assets', color: 'bg-sky-500/50' },
  { id: 'Design', text: 'Design', color: 'bg-blue-500/50' },
  { id: 'Market', text: 'Market Research', color: 'bg-indigo-500/50' },
  { id: 'Repo', text: 'Repository', color: 'bg-fuchsia-500/50' },
  { id: 'Program', text: 'Program', color: 'bg-pink-500/50' },
  { id: 'WebResource', text: 'Web Resource', color: 'bg-rose-500/50' },
  { id: 'Tools', text: 'Tools', color: 'bg-stone-500/50' },
  { id: 'AI', text: 'AI', color: 'bg-stone-500/50' },
  { id: 'Networking', text: 'Networking', color: 'bg-lime-300/50'}
])

const resourceCards = ref([
    AlternativeTo,
    CaesiumImageCreator,
    CatlikeCoding,
    CGAL,
    Cyanilux,
    Freepik,
    FreeSfx,
    FreeSound,
    Paletton,
    Pixabay,
    RedBlobGames,
    RefactoringGuru,
    Sensortower,
    Shadertoy,
    SteamDB,
])

export const resourceCardsList = resourceCards