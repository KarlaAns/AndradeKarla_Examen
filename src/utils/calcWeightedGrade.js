function calcWeightedGrade(grades, weights) {
    if (grades.length !== weights.length) {
    throw new Error('Las longitudes de las notas y los pesos deben ser iguales');
    }

    const weightedSum = grades.reduce((acc, grade, index) => {
    return acc + grade * weights[index];
    }, 0);

    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

    return weightedSum / totalWeight;
}

function percentile(p, values){
    values.sort((a, b) => a - b);
    if (p === 0) return values[0];
    const index = Math.ceil((p / 100) * values.length) - 1;
    return values[index];
}

module.exports = { calcWeightedGrade, 
    percentile 
};