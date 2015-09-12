describe('Enemy', function (){
	it('should be able to create an enemy with row, position and sprite', function(){
		var enemy = new Enemy(1);

		expect(enemy).toBeDefined();

		expect(enemy.getPosition).toBeDefined();

		expect(enemy.row).toBe(1);

		expect(enemy.sprite).toBeDefined();

	});

})