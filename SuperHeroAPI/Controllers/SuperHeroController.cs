using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;


namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        #region BancoDeDados
        private readonly DataContext _Context;

        public SuperHeroController(DataContext context) 
        {
            _Context = context;
        }
        #endregion

        #region MetodoGET
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> Get()
        {
            //Não esta retornando todos os dados
            return Ok(await _Context.SuperHeroes.ToListAsync());
        }
        #endregion

        #region MetodoGETComID
        [HttpGet("{id}")]
        public async Task<ActionResult<List<SuperHero>>> Get(int id)
        {
            //Faz a busca somente com o ID
            var hero = await _Context.SuperHeroes.FindAsync(id);
            //Verificação
            if(hero == null)
            {
                return BadRequest("Herói não encontrado");
            }
            return Ok(hero);
        }
        #endregion

        #region MetodoPOST
        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> AddHero(SuperHero hero)
        {
            //Adicionando um novo registro
            _Context.SuperHeroes.Add(hero);
            await _Context.SaveChangesAsync();
            //Não esta funcionando o metodo ToListAsync, para listar, então fiz o filtro pelo id
            hero = await _Context.SuperHeroes.FindAsync(hero.Id);
            //Dessa forma o retorno é sempre o heroi que esta sendo cadastrado e não todos
            return Ok(hero);
        }
        #endregion

        #region MetodoPUT
        //Editando os valores 
        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateHero(SuperHero request)
        {
            //Faz a busca somente com o ID
            var hero = await _Context.SuperHeroes.FindAsync(request.Id);
            //Verificação se existe
            if (hero == null)
            {
                return BadRequest("Herói não encontrado");
            }
            //Altera os dados
            hero.Name = request.Name;
            hero.FirstName = request.FirstName;
            hero.LastName = request.LastName;
            hero.Place = request.Place;

            await _Context.SaveChangesAsync();

            //Não esta funcionando o metodo ToListAsync, para listar, então fiz o filtro pelo id
            hero = await _Context.SuperHeroes.FindAsync(hero.Id);
            //Dessa forma o retorno é sempre o heroi que esta sendo cadastrado e não todos
            return Ok(hero);
        }
        #endregion

        #region MetodoDelete
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> Delete(int id)
        {
            //Faz a busca somente com o ID
            var hero = await _Context.SuperHeroes.FindAsync(id);
            //Verificação
            if (hero == null)
            {
                return BadRequest("Herói não encontrado");
            }
            _Context.SuperHeroes.Remove(hero);
            await _Context.SaveChangesAsync();  
            return Ok(hero);
        }
        #endregion

    }
}
