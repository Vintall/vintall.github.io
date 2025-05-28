import { ref } from 'vue'
import RedBlobGamesPreview from "@/assets/media/resources/redblobgames.png"
import CatLikeCodingPreview from "@/assets/media/resources/catlikecoding.png"
import CyaniluxPreview from "@/assets/media/resources/cyanilux.png"
import RefactoringGuruPreview from "@/assets/media/resources/RefactoringGuru.png"
import FreepikPreview from "@/assets/media/resources/freepik.png"
import PalettonPreview from "@/assets/media/resources/paletton.png"
//Tags: HLSL, ShaderGraph, Math

export const getTagById = (id) => tags.value.find(tag => tag.id === id)

export const tags = ref([
  { id: 'Gamedev', text: 'Gamedev', color: 'bg-red-600/50' },
  { id: 'Unity', text: 'Unity', color: 'bg-green-600/50' },
  { id: 'Shaders', text: 'Shaders', color: 'bg-pink-600/50' },
  { id: 'HLSL', text: 'HSLS', color: 'bg-pink-500/50' },
  { id: 'CG', text: 'CG', color: 'bg-pink-500/50' },
  { id: 'VFX', text: 'VFX', color: 'bg-orange-300/50' },
  { id: 'Solid', text: 'SOLID', color: 'bg-cyan-600/50' },
  { id: 'FreeAssets', text: 'Assets', color: 'bg-amber-600/50' },
  { id: 'Design', text: 'Design', color: 'bg-lime-600/50' },
  { id: 'Market', text: 'Market Research', color: 'bg-violet-600/50'},
  { id: 'Steam', text: 'Steam', color: 'bg-blue-600/50'},
  { id: 'Repo', text: 'Repository', color: 'bg-blue-900/50'},
  { id: 'Program', text: 'Program', color: 'bg-blue-900/50'},
  { id: 'Web resource', text: 'Web Resource', color: 'bg-blue-900/50'},
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
        tagIds: ['FreeAssets']
    },
    {
        name: "Paletton",
        link: "https://paletton.com/",
        img: PalettonPreview,
        desc: "The color scheme designer. Helps to make good color combinations without extensive knowledge in color design",
        tagIds: ['Design']
    }/*,
    {
        name: "",
        link: "",
        img: "",
        desc: "",
        tags: ['Gamedev']
    }*/
])

export const resourceCardsList = resourceCards