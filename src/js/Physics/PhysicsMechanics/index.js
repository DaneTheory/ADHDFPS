import CONFIG from '../../Config'


const GenerateWorldSolverHandler = () => {
  const gsSolver = new CANNON.GSSolver()
  gsSolver.iterations = 7
  gsSolver.tolerance = 0.1
  return gsSolver
}
const WorldSolver = GenerateWorldSolverHandler()

const GenerateWorldFriction = () => {
  CONFIG.PHYSICS_MATERIAL = new CANNON.Material(`slipperyMaterial`)
  const contactMaterialFriction = new CANNON.ContactMaterial(CONFIG.PHYSICS_MATERIAL, CONFIG.PHYSICS_MATERIAL, 0.0, 0.3)  // Third param: friction coefficient  Fourth param: restitution
  CONFIG.WORLD.addContactMaterial(contactMaterialFriction)
}

const PhysicsMechanics = () => {
  CONFIG.WORLD = new CANNON.World()
  CONFIG.WORLD.quatNormalizeSkip = 0
  CONFIG.WORLD.quatNormalizeFast = false
  CONFIG.WORLD.defaultContactMaterial.contactEquationStiffness = 1e9
  CONFIG.WORLD.defaultContactMaterial.contactEquationRelaxation = 4
  CONFIG.WORLD.solver = new CANNON.SplitSolver(WorldSolver)
  CONFIG.WORLD.gravity.set(0, -22, 0)
  CONFIG.WORLD.broadphase = new CANNON.NaiveBroadphase()
  GenerateWorldFriction()
}


export default PhysicsMechanics
