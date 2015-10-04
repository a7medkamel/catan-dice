function roll(count)
{
	var die = [];
	for(var i = 0; i < count; i++)
	{
		die.push(Math.ceil(6 * random()))
	}
	
	return die;
}