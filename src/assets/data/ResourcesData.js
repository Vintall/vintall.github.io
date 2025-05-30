import { ref } from 'vue'
import RedBlobGamesPreview from "@/assets/media/resources/redblobgames.png"
import CatLikeCodingPreview from "@/assets/media/resources/catlikecoding.png"
import CyaniluxPreview from "@/assets/media/resources/cyanilux.png"
import RefactoringGuruPreview from "@/assets/media/resources/RefactoringGuru.png"
import FreepikPreview from "@/assets/media/resources/freepik.png"
import PalettonPreview from "@/assets/media/resources/paletton.png"
import CaesiumImageCreatorPreview from "@/assets/media/resources/caesiumImageCreator.png"
import AlternativeToPreview from "@/assets/media/resources/alternativeTo.png"
//Tags: HLSL, ShaderGraph, Math

export const getTagById = (id) => tags.value.find(tag => tag.id === id)

export const tags = ref([
  { id: 'Gamedev', text: 'Gamedev', color: 'bg-red-600/50' },
  { id: 'Unity', text: 'Unity', color: 'bg-orange-500/50' },
  { id: 'Shaders', text: 'Shaders', color: 'bg-yellow-500/50' },
  { id: 'HLSL', text: 'HLSL', color: 'bg-lime-500/50' },
  { id: 'CG', text: 'CG', color: 'bg-green-500/50' },
  { id: 'VFX', text: 'VFX', color: 'bg-emerald-500/50' },
  { id: 'Solid', text: 'SOLID', color: 'bg-cyan-500/50' },
  { id: 'FreeAssets', text: 'Assets', color: 'bg-sky-500/50' },
  { id: 'Design', text: 'Design', color: 'bg-blue-500/50' },
  { id: 'Market', text: 'Market Research', color: 'bg-indigo-500/50' },
  { id: 'Steam', text: 'Steam', color: 'bg-violet-500/50' },
  { id: 'Repo', text: 'Repository', color: 'bg-fuchsia-500/50' },
  { id: 'Program', text: 'Program', color: 'bg-pink-500/50' },
  { id: 'WebResource', text: 'Web Resource', color: 'bg-rose-500/50' },
  { id: 'Tools', text: 'Tools', color: 'bg-stone-500/50' },
  { id: 'AI', text: 'AI', color: 'bg-stone-500/50' },
])

const resourceCards = ref([
    {
        name: "Red Blob Games",
        link: "https://www.redblobgames.com/",
        img: RedBlobGamesPreview,
        desc: "Interactive visual explanations of math and algorithms",
        tagIds: ['Gamedev']
    },
    {
        name: "Cat Like Coding",
        link: "https://catlikecoding.com/unity/tutorials/",
        img: CatLikeCodingPreview,
        desc: "C# and Shader Tutorials for the Unity Engine",
        tagIds: ['Gamedev', 'Unity', 'Shaders']
    },
    {
        name: "Cyanilux",
        link: "https://www.cyanilux.com/",
        img: CyaniluxPreview,
        desc: "URP Shader Tutorials",
        tagIds: ['Gamedev', 'Unity', 'Shaders']
    },
    {
        name: "Refactoring Guru",
        link: "https://refactoring.guru/design-patterns/catalog",
        img: RefactoringGuruPreview,
        desc: "Refactoring, design patterns, SOLID principles, and other smart programming topics",
        tagIds: ['Solid']
    },
    {
        name: "FREEPIK",
        link: "https://www.freepik.com/",
        img: FreepikPreview,
        desc: "AI-powered platform for source content (paid). But you can also find here royalty-free music or free icons",
        tagIds: ['FreeAssets', 'AI']
    },
    {
        name: "Paletton",
        link: "https://paletton.com/",
        img: PalettonPreview,
        desc: "The color scheme designer. Helps to make good color combinations without extensive knowledge in color design",
        tagIds: ['Design']
    },
    {
        name: "Caesium Image Compressor",
        link: "https://github.com/Lymphatus/caesium-image-compressor",
        img: CaesiumImageCreatorPreview,
        desc: "Free&OpenSource image compression software. Supporting JPG, PNG, WebP and TIFF formats. Loss/Lossless compression. Must-have for web applications.",
        tagIds: ['Tools', 'Program']
    },
    {
        name: "AlternativeTo",
        link: "https://alternativeto.net/",
        img: AlternativeToPreview,
        desc: "Find Free&OpenSource alternatives to proprietary software",
        tagIds: ['Tools', 'WebResource']
    },
    {
        name: "Sensor Tower",
        link: "https://sensortower.com/",
        img: "",
        desc: "",
        tagIds: ['Gamedev', 'Market']
    }
   /*,
    {
        name: "",
        link: "",
        img: "",
        desc: "",
        tagIds: ['Gamedev']
    }*/
])

export const resourceCardsList = resourceCards