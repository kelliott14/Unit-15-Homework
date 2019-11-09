module.exports = function(sequelize, DataTypes) {
    var Burger15 = sequelize.define("Burger15", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger15.associate = function(models) {
        Burger15.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
        });
    };
    
    return Burger15;
};


