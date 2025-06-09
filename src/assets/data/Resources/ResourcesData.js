import { ref } from 'vue'

//Git
import Alchemy from './ResourceCards/Git/Alchemy'
import AwsomeOpensourceUnity from './ResourceCards/Git/AwesomeOpensourceUnity'
import CaesiumImageCreator from './ResourceCards/Git/CaesiumImageCreator'
import computerScience from './ResourceCards/Git/computer-science'
import Deform from './ResourceCards/Git/Deform'
import developerRoadmap from './ResourceCards/Git/developer-roadmap'
import EntitasRedux from './ResourceCards/Git/Entitas-Redux'
import Entitas from './ResourceCards/Git/Entitas'
import FacepunchSteamworks from './ResourceCards/Git/Facepunch.Steamworks'
import FastNoiseLite from './ResourceCards/Git/FastNoiseLite'
import FastScriptReload from './ResourceCards/Git/FastScriptReload'
import FileConverter from './ResourceCards/Git/FileConverter'
import Gitignore from './ResourceCards/Git/GitIgnore'
import Godot from './ResourceCards/Git/Godot'
import gpuParticles from './ResourceCards/Git/gpu-particles'
import graphy from './ResourceCards/Git/graphy'
import HierarchyDecorator from './ResourceCards/Git/HierarchyDecorator'
import keijiroKino from './ResourceCards/Git/keijiro-Kino'
import KvantSpray from './ResourceCards/Git/KvantSpray'
import LitMotion from './ResourceCards/Git/LitMotion'
import LoopScrollRect from './ResourceCards/Git/LoopScrollRect'
import LWGUI from './ResourceCards/Git/LWGUI'
import MinimalCompute from './ResourceCards/Git/MinimalCompute'
import MirrorNetworking from './ResourceCards/Git/MirrorNetworking'
import ParticleEffectForUGUI from './ResourceCards/Git/mob-sakai-ParticleEffectForUGUI'
import UIEffect from './ResourceCards/Git/mob-sakai-UIEffect'
import SimpleUnityAudioManager from './ResourceCards/Git/Simple-Unity-Audio-Manager'
import SveltoECS from './ResourceCards/Git/Svelto.ECS'
import uDesktopDuplication from './ResourceCards/Git/uDesktopDuplication'
import UniTask from './ResourceCards/Git/UniTask'
import UnityEditorToolbox from './ResourceCards/Git/Unity-Editor-Toolbox'
import unityPackageTools from './ResourceCards/Git/unity-package-tools'
import unityTexturePacker from './ResourceCards/Git/unity-texture-packer'
import UnityAssetUsageDetector from './ResourceCards/Git/UnityAssetUsageDetector'
import UnityLibrary from './ResourceCards/Git/UnityLibrary'
import websocket from './ResourceCards/Git/websocket-sharp'
import YarnSpinner from './ResourceCards/Git/YarnSpinner'
import Zenject from './ResourceCards/Git/Zenject'

//Web
import AlternativeTo from './ResourceCards/Web/AlternativeTo.js'
import CatlikeCoding from './ResourceCards/Web/CatlikeCoding.js'
import CGAL from './ResourceCards/Web/CGAL.js'
import Cyanilux from './ResourceCards/Web/Cyanilux.js'
import Freepik from './ResourceCards/Web/Freepik.js'
import FreeSfx from './ResourceCards/Web/FreeSfx.js'
import FreeSound from './ResourceCards/Web/FreeSound.js'
import MagicaVoxel from './ResourceCards/Web/MagicaVoxel.js'
import Paletton from './ResourceCards/Web/Paletton.js'
import Pixabay from './ResourceCards/Web/Pixabay.js'
import RedBlobGames from './ResourceCards/Web/RedBlobGames.js'
import RefactoringGuru from './ResourceCards/Web/RefactoringGuru.js'
import SemanticsVersioning from './ResourceCards/Web/SemanticsVersioning.js'
import Sensortower from './ResourceCards/Web/Sensortower.js'
import Shadertoy from './ResourceCards/Web/Shadertoy.js'
import SteamDB from './ResourceCards/Web/SteamDB.js'

export const getTagById = (id) => tags.value.find(tag => tag.id === id)

export const tags = ref([
  { id: 'Repo', text: 'Repository', color: 'bg-fuchsia-500/50', type: 'Holder' },
  { id: 'Program', text: 'Program', color: 'bg-pink-500/50', type: 'Holder' },
  { id: 'WebResource', text: 'Web Resource', color: 'bg-rose-500/50', type: 'Holder' },

  { id: 'GLSL', text: 'GLSL', color: 'bg-lime-500/50', type: 'Lang' },
  { id: 'HLSL', text: 'HLSL', color: 'bg-lime-500/50', type: 'Lang' },
  { id: 'CG', text: 'CG', color: 'bg-green-500/50', type: 'Lang' },
  { id: 'C#', text: 'C#', color: 'bg-green-500/50', type: 'Lang' },
  { id: 'C++', text: 'C++', color: 'bg-green-500/50', type: 'Lang' },

  { id: 'Tools', text: 'Tools', color: 'bg-stone-500/50', type: 'Kind' },
  { id: 'Learning', text: 'Learning', color: 'bg-stone-500/50', type: 'Kind' },
  { id: 'FreeAssets', text: 'Assets', color: 'bg-sky-500/50', type: 'Kind' },
  { id: 'Design', text: 'Design', color: 'bg-blue-500/50', type: 'Kind' },
  { id: 'Market', text: 'Market Research', color: 'bg-indigo-500/50', type: 'Kind' },

  { id: 'Unity', text: 'Unity', color: 'bg-orange-500/50', type: 'General' },
  { id: 'Shaders', text: 'Shaders', color: 'bg-yellow-500/50', type: 'General' },
  { id: 'URP', text: 'URP', color: 'bg-yellow-500/50', type: 'General' },
  { id: 'HDRP', text: 'HDRP', color: 'bg-yellow-500/50', type: 'General' },
  { id: 'VFX', text: 'VFX', color: 'bg-emerald-500/50', type: 'General' },
  { id: 'SFX', text: 'SFX', color: 'bg-emerald-500/50', type: 'General' },
  { id: 'Solid', text: 'SOLID', color: 'bg-cyan-500/50', type: 'General' },
  { id: 'AI', text: 'AI', color: 'bg-stone-500/50', type: 'General' },
  { id: 'ECS', text: 'ECS', color: 'bg-stone-500/50', type: 'General' },
  { id: 'Networking', text: 'Networking', color: 'bg-lime-300/50', type: 'General' }
])

const resourceCards = ref([
  //Git
  Alchemy,
  AwsomeOpensourceUnity,
  CaesiumImageCreator,
  computerScience,
  Deform,
  developerRoadmap,
  EntitasRedux,
  Entitas,
  FacepunchSteamworks,
  FastNoiseLite,
  FastScriptReload,
  FileConverter,
  Gitignore,
  Godot,
  gpuParticles,
  graphy,
  HierarchyDecorator,
  keijiroKino,
  KvantSpray,
  LitMotion,
  LoopScrollRect,
  LWGUI,
  MinimalCompute,
  MirrorNetworking,
  ParticleEffectForUGUI,
  UIEffect,
  SimpleUnityAudioManager,
  SveltoECS,
  uDesktopDuplication,
  UniTask,
  UnityEditorToolbox,
  unityPackageTools,
  unityTexturePacker,
  UnityAssetUsageDetector,
  UnityLibrary,
  websocket,
  YarnSpinner,
  Zenject,

  //Web
  AlternativeTo,
  CatlikeCoding,
  CGAL,
  Cyanilux,
  Freepik,
  FreeSfx,
  FreeSound,
  MagicaVoxel,
  Paletton,
  Pixabay,
  RedBlobGames,
  RefactoringGuru,
  SemanticsVersioning,
  Sensortower,
  Shadertoy,
  SteamDB,
])

export const resourceCardsList = resourceCards